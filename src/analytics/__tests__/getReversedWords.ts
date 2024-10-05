import { getReversedWords } from "../index.js";

const text = `Hola que tal

Ayer compré pan`;
const expectedReversedWords = `aloH euq lat  reyA érpmoc nap`;
const reversedWords = getReversedWords(text);

if (expectedReversedWords === reversedWords) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
