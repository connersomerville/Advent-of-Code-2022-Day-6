import { getLineReader } from "./reader.js";

const args = process.argv.slice(2);
const filePath = args[0] || "test/fixtures/input.txt";
const lineReader = getLineReader({
  filePath,
});

let buffer = "";

lineReader.on("line", (line) => {
  buffer += line;
});

lineReader.on("close", () => {
  for (let start = 0, end = 14; end < buffer.length; start++, end++) {
    const substring = buffer.slice(start, end);
    const marker = new Set(substring.split("")).size === 14;

    if (marker) {
      console.log(`Marker found at ${end} substring ${substring}`);
      break;
    }
  }
});
