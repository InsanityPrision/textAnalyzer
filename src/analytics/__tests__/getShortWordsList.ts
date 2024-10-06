import { getShortWordsList } from "../index.js";

const words: string[] = [];
const expectedJoinedWords = "";
const joinedWords = getShortWordsList(words);

if (joinedWords === expectedJoinedWords) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
