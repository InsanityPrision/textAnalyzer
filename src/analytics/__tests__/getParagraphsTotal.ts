import { getParagraphsTotal } from "../index.js";

const text = `Hola 
  buenas 
  tardes 
  que tal estas?`;
const expectedParagraphs = 4;
const paragpraphsTotal = getParagraphsTotal(text);

if (paragpraphsTotal === expectedParagraphs) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
