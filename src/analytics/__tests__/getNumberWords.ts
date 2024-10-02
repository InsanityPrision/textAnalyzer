import { getNumberWords } from "../index.js";

let wordsNumber = getNumberWords("Hola que tal estas yo me llamo Erik");
let expectedWords = 8;

if (wordsNumber === expectedWords) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
