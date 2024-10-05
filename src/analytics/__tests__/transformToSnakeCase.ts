import { transformToSnakeCase } from "../index.js";

const text = `Hola que tal estas? Yo bien

Ayer nada`;
const expectedTextInKebabCase = `hola_que_tal_estas?_yo_bien_ayer_nada`;
const textInKebabCase = transformToSnakeCase(text);

if (textInKebabCase === expectedTextInKebabCase) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
