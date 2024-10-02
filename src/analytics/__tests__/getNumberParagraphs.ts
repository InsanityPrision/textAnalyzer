import { getNumberParagraphs } from "../index.js";

let test = getNumberParagraphs(`Hola 
  buenas 
  tardes 
  que tal estas?`);

if (test === 4) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
