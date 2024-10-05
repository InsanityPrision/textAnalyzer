import { trasformToCamelCase } from "../index.js";

const text = `Hola que tal estas?

Yo bien`;
const expectedTextInCamelCase = `HolaQueTalEstas?YoBien`;
const textInCamelCase = trasformToCamelCase(text);

if (textInCamelCase === expectedTextInCamelCase) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
