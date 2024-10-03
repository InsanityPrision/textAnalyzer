import { getWordsList } from "../index.js";

const wordList: string[] = [];
const expectedJoinedWords = "";
const joinedWords = getWordsList(wordList);

if (joinedWords === expectedJoinedWords) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
