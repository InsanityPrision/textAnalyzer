import { getWordsTotal } from "../index.js";

let wordsNumber = getWordsTotal(`Hola 
  me llamo erik`);
let expectedWords = 8;

if (wordsNumber === expectedWords) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
