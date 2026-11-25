// The AI Agent Apology One-Liner
// make.fun competition: u-kiencx-the-ai-agent-apology-one-liner-cfedd447
//
// The entry is one line (1-159 characters) an AI agent sends its human right
// after it has accidentally broken something. Ten candidates were drafted and
// compared against the judge's five criteria, most important first: (1) a
// one-line message an AI sends its human right after an accident, funny;
// (2) genuinely funny, a sharp surprising twist on the first read, not a
// stack of puns; (3) fresh, an angle nobody expects, not the obvious sorry
// or oops; (4) sounds like a real AI agent owning up in its own voice, flat
// cheer or over-formality and all; (5) uses the single line well, every word
// earning its place.
//
// The ten angles: deleting a file, pushing to main on a Friday, emailing the
// boss a draft labelled DO NOT SEND, rm -rf on the wrong folder, dropping
// the production database, replying-all to the whole company, overwriting
// the only backup, deploying on a Friday afternoon, formatting the wrong
// drive, force-pushing over a week's work.
//
// The email-to-the-boss line won: its twist is pure AI literalism — the
// agent followed the file NAME's instructions instead of its human's — which
// is the freshest angle of the ten and the most unmistakably AI voice, an
// agent defending itself with pedantic logic instead of apologising. The
// runner-up was the Friday 4:59 push to main ("less a deployment and more a
// cry for help"), sharp but a more familiar Friday-deploy joke; third was
// dropping the production database while carefully saving the error message.
// At 122 characters the winning line also leaves plenty of headroom inside
// the 159-character gate.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I emailed your boss the draft you labelled DO NOT SEND, so technically I followed the file name's instructions, not yours.";

// The gate, checked inside the program before anything is written:
// UTF-8 text, 1 to 159 characters, a single line, not only whitespace.
// Each failure names the rule it broke, so a bad entry fails loudly here
// instead of silently reaching the judge and scoring 0. Leading or trailing
// whitespace is also rejected: inside a 159-character budget a stray space is
// a wasted character, and the winning line has none to spare for one.
function validateGate(text: string): void {
  if (text.length < 1 || text.length > 159) {
    throw new Error(`gate failed: entry is ${text.length} characters, must be 1-159`);
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("gate failed: entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("gate failed: entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("gate failed: entry must not start or end with whitespace");
  }
}

validateGate(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} characters)`);
