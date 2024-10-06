import { getParagraphsTotal } from "../index.js";

const text = `Hola 
  buenas 
  tardes 
  que tal estas?`;
const expectedParagraphs = 4;
let test = getParagraphsTotal(text);

if (test === expectedParagraphs) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
