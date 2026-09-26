// Creates a Firebase Auth account for one email and prints a link that lets
// them set their own password (no Firebase email delivery needed - you send
// this link yourself).
//   node scripts/add-user.js someone@example.com
//
// Needs serviceAccountKey.json at repo root (see scripts/upload-content.js).
// Note: this only creates the login. The email must ALSO be added to the
// allowlist in firestore.rules (and deployed) before they get real access.
const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const email = process.argv[2];
if (!email) {
  console.error("Usage: node scripts/add-user.js someone@example.com");
  process.exit(1);
}

const keyPath = path.join(__dirname, "..", "serviceAccountKey.json");
if (!fs.existsSync(keyPath)) {
  console.error("Missing serviceAccountKey.json at repo root.");
  process.exit(1);
}

admin.initializeApp({credential: admin.credential.cert(require(keyPath))});

async function main() {
  const normalizedEmail = email.trim().toLowerCase();
  const tempPassword = crypto.randomBytes(18).toString("base64url");

  let user;
  try {
    user = await admin.auth().createUser({
      email: normalizedEmail,
      password: tempPassword,
    });
    console.log(`Created account for ${normalizedEmail} (uid: ${user.uid})`);
  } catch (err) {
    if (err.code === "auth/email-already-exists") {
      console.log(`Account for ${normalizedEmail} already exists - skipping creation.`);
    } else {
      throw err;
    }
  }

  const link = await admin.auth().generatePasswordResetLink(normalizedEmail);
  console.log("\nSend this link to the user so they can set their own password:");
  console.log(link);
}

main().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
