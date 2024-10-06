import { getWordsTotal } from "../index.js";

const text = `Hola 
  me llamo erik`;
let wordsNumber = getWordsTotal(text);
let expectedWords = 8;

if (wordsNumber === expectedWords) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
