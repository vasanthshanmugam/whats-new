// Pushes content/interview-prep-content.html into Firestore so the live
// gated page picks it up. Run this any time that file changes:
//   node scripts/upload-content.js
//
// Needs a service account key saved at repo root as serviceAccountKey.json
// (Firebase Console -> Project settings -> Service accounts -> Generate new
// private key). That file is gitignored - never commit it.
const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

const keyPath = path.join(__dirname, "..", "serviceAccountKey.json");
if (!fs.existsSync(keyPath)) {
  console.error(
      "Missing serviceAccountKey.json at repo root. Download it from " +
      "Firebase Console -> Project settings -> Service accounts -> " +
      "Generate new private key, and save it there.",
  );
  process.exit(1);
}

const serviceAccount = require(keyPath);
admin.initializeApp({credential: admin.credential.cert(serviceAccount)});

const contentPath = path.join(
    __dirname, "..", "content", "interview-prep-content.html",
);
const html = fs.readFileSync(contentPath, "utf8");

admin.firestore()
    .collection("protected")
    .doc("interview-prep")
    .set({html, updatedAt: new Date().toISOString()})
    .then(() => {
      console.log("Uploaded content/interview-prep-content.html to Firestore.");
      process.exit(0);
    })
    .catch((err) => {
      console.error("Upload failed:", err);
      process.exit(1);
    });
