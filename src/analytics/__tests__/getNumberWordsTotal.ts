import { getWordstotal } from "../index.js";

let wordsNumber = getWordstotal(`Hola 
  me llamo erik`);
let expectedWords = 8;

if (wordsNumber === expectedWords) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
