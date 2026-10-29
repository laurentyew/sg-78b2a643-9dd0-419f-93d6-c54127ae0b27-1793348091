/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const hits = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (/\.(tsx|ts)$/.test(entry.name)) {
      const lines = fs.readFileSync(full, "utf8").split("\n");
      lines.forEach((line, index) => {
        if (/waitlist/i.test(line)) {
          hits.push(full + ":" + (index + 1) + ": " + line.trim());
        }
      });
    }
  }
}

walk("src");

console.log("remaining occurrences: " + hits.length);
hits.forEach((hit) => console.log(hit));