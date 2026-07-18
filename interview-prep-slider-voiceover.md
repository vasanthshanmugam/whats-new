# Interview Prep Slider — Voiceover Script

Read-aloud narration for `interview-prep-slider.html`, one block per slide.
First-person, instructor voice, written casual/conversational — the way
you'd actually talk it out loud, not the way you'd write ad copy. Pacing
target ~15–25 seconds per slide at a natural pace, adjust as needed.

---

## Slide 1 — Cover
Hey, I'm Vasanth. So this is the Performance Testing Interview Prep
Bootcamp, and honestly the whole thing comes down to one goal — cracking
the interview. Every tool we use, every JVM detail, every APM dashboard,
all of it gets turned into the actual question a panel's gonna ask you,
and the answer that actually gets you the job. Let me walk you through it.

## Slide 2 — The Problem
Okay so here's the thing I kept running into. People have run hundreds of
JMeter tests, no problem — but ask them "walk me through your test
infrastructure" and they just freeze. Or they've read all about G1GC, but
the second someone pushes back and asks what the downsides are, they
blank. Same with thread dumps — sure, they've opened one before, but never
had to actually diagnose one live, on the spot, with someone watching them
do it. It's not that they don't know performance testing. They just never
got trained on how to talk about it when the pressure's on.

## Slide 3 — The Shift
So here's the big idea behind this whole bootcamp. This isn't a "how do
you build it" course. It's a "how do you answer it" course. Every topic —
JMeter correlation, JVM tuning, Dynatrace, capacity planning, all of it —
gets broken into three pieces: the actual question an interviewer asks,
the model answer, and a story you can tell in first person if it comes
up. We're not doing production best practices in the abstract here. We're
doing the actual back-and-forth that happens in the room. And honestly my
test for every session is pretty simple — could you say this back to a
panel right now, confidently? If the answer's no, we're not done yet.

## Slide 4 — How a Week Works
Each week runs twice, basically. Saturday's two hours — we walk through
the concept, do a live demo you can actually reproduce yourself, and the
whole thing's framed around the interview question it's answering. We
close out with a story, first person, that you can adapt and use later.
Then Sunday's an hour — rapid-fire Q&A. Warm-up questions, some
scenario-based ones, and then curveballs that dig deeper. And every single
question comes with the model answer already written out. We're not
holding anything back until you "struggle enough" — you get the answer
key from week one.

## Slide 5 — Transformation
Here's what actually shifts once you go through this. Right now maybe
you're scrambling through old notes the night before an interview, or
just guessing what a decent answer to a GC tuning question even sounds
like. You've got the experience, sure, but no real rehearsed way to talk
about it — and you're kind of hoping nobody brings up heap dumps. After
this, you've got an actual rehearsed story ready to go for every big
topic. A format you can use to handle basically any curveball. Twenty-one
weeks of actually drilling this stuff, not cramming the night before. And
you'll know which question's coming because, honestly, you've answered it
a dozen times by then. We're not just teaching performance testing here —
we're trying to take the fear out of that one hour that decides your next
job.

## Slide 6 — Curriculum Overview
Five phases, twenty-one weeks, and we try to hit every corner of the
interview. Phase one's foundations, but framed for interviews from day
one. Phase two's tool proficiency and cloud — JMeter, LoadRunner, NeoLoad,
k6. Phase three's APM, JVM internals, root cause analysis — honestly the
deepest part of the whole course. Phase four's end-to-end workflows and AI
in testing. And phase five is mock interviews, your resume, and
mentorship that keeps going after we wrap up.

## Slide 7 — Phase 1 Detail
Phase one's weeks one through three — foundations, but again, framed
around interviews the whole way. Week one's about confidently answering
"what even is performance testing, and where does it fit in the SDLC" —
load, stress, spike, endurance, scalability, volume testing. Week two's
the life cycle and your KPIs — response time, throughput, error rate,
percentiles — plus architecture stuff, client-server, three-tier,
microservices. Week three's how you actually gather NFRs, SLA versus SLO
versus SLI, and workload modelling with Think Time calculations, all set
up as interview scenarios.

## Slide 8 — Phase 2 Detail
Phase two's weeks four through ten, tool proficiency and cloud. We spend
three weeks deep in JMeter — fundamentals and cloud execution first, then
correlation and parameterization, then advanced scripting with JSR223 and
Groovy. From there we move into LoadRunner's architecture and VuGen,
NeoLoad's design and cloud-native side, and k6's more modern,
developer-first approach. Then week ten ties it all together with the
question every single panel asks — which tool would you actually pick,
and why.

## Slide 9 — Phase 3 Detail
Phase three's weeks eleven through fourteen — APM, JVM internals, root
cause analysis. And honestly, this is the heaviest part of the course,
because this is where most performance engineering interviews actually
get won or lost. We go deep on Dynatrace with live demos, reading thread
states. We compare AppDynamics and New Relic side by side. We get into
JVM internals and GC tuning — heap versus stack, memory regions, G1, CMS,
ZGC. And then bottleneck identification — reading thread dumps, heap
dumps, figuring out connection pooling issues, building out a full
root-cause story you could walk a panel through step by step.

## Slide 10 — Phase 4 Detail
Phase four's weeks fifteen through eighteen — end-to-end workflows and AI
in testing. Capacity planning and cloud performance across AWS, Azure,
GCP. CI/CD and how to actually explain shift-left without rambling.
Microservices, API, and database performance — REST, GraphQL, gRPC,
connection pooling, query optimization. And how AI fits into your testing
work today, with some real case studies you can turn into interview
stories.

## Slide 11 — Phase 5 Detail
Phase five's weeks nineteen through twenty-one, and this is where it all
comes together. Week nineteen's your resume and portfolio — making sure
your Dynatrace, JVM, and tool experience actually survives screening.
Week twenty's full mock interviews, technical and behavioral, with real
feedback across everything we've covered. And week twenty-one's your
final assessment, a certificate, a career roadmap, and how the mentorship
keeps going once the course wraps up.

## Slide 12 — Sample Question
Let me just show you what this actually looks like. Here's a real
question someone's actually been asked in an interview — "how would you
pass fifty unique IDs from one API into the next API request in JMeter,
and with fifty threads, that's twenty-five hundred unique IDs total?" And
here's how the model answer starts — you'd extract every ID with a JSON
Extractor set to Match Numbers minus one, loop over them per thread with
a ForEach Controller, and lean on JMeter's thread-local variable scope so
all fifty threads run independently with zero collisions. That's the kind
of detail every week is built around.

## Slide 13 — What's Included
So here's everything that's actually in this, nothing held back.
Twenty-one Saturday trainings, twenty-one Sunday Q&A drills. Dynatrace and
APM live demos. JVM internals, GC tuning, heap and thread dump analysis.
JMeter, LoadRunner, NeoLoad, k6, all integrated with AWS, Azure, GCP. AI
in testing. Full mock interviews across every topic. Resume, portfolio,
career guidance. Mentorship after the course ends. And recordings, a
certificate, lifetime access to everything.

## Slide 14 — Instructor
Quick word on who's actually teaching this — it's me, Vasanth Shanmugam,
I run Vasanth Tech Talk. I'm a performance engineering guy at heart,
hands-on with Dynatrace, APM tools, JVM internals, enterprise-scale
systems. I've mentored people from total freshers to senior engineers on
cracking these interviews at some pretty big companies, and that doesn't
just stop when the course does.

## Slide 15 — Pricing
This is a one-time fee for the full twenty-one weeks. Normally it's
twenty-five thousand rupees, but right now it's twelve thousand nine
hundred ninety-nine, for a limited time — one payment, sixty-three hours
total. Seats are limited on purpose too, so the mock interviews and
mentorship actually stay personal instead of turning into something
mass-produced.

## Slide 16 — Final CTA
So really it comes down to this — stop hoping they don't ask, and
actually know what you're gonna say. Twenty-one weeks, August first
through December nineteenth, 2026. Saturday training, Sunday drills, and
mentorship that keeps going after we're done. Download this deck, share
it around, come back to it whenever — and when you're ready, go ahead and
register.
