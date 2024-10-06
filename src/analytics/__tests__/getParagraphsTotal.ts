import { getParagraphsTotal } from "../index.js";

const text = `Hola 
  buenas 
  tardes 
  que tal estas?`;
let test = getParagraphsTotal(text);

if (test === 4) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
