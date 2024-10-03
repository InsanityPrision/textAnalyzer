import { getShortWordsList } from "../index.js";

const wordList: string[] = [];
const expectedJoinedWords = "";
const joinedWords = getShortWordsList(wordList);

if (joinedWords === expectedJoinedWords) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
