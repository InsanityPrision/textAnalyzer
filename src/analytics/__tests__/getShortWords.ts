import { getShortWords } from "../index.js";

const text = "";
const expectedShortWords: string[] = [];
const shortWords = getShortWords(text);

if (shortWords === expectedShortWords) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
