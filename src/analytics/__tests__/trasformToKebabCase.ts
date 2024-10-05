import { trasformToKebabCase } from "../index.js";

const text = `Hola que tal estas? Yo bien

Ayer nada`;
const expectedTextInKebabCase = `hola-que-tal-estas?-yo-bien-ayer-nada`;
const textInKebabCase = trasformToKebabCase(text);

if (textInKebabCase === expectedTextInKebabCase) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
