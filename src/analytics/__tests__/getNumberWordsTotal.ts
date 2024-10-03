import { getNumberWordstotal } from "../index.js";

let wordsNumber = getNumberWordstotal("Hola que tal estas yo me llamo Erik");
let expectedWords = 8;

if (wordsNumber === expectedWords) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
