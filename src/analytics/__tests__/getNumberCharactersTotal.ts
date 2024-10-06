import { getCharactersTotal } from "../index.js";

const text = `Hola`;
const charactersNumber = getCharactersTotal(text);
const expectedCharacters = 4;

if (charactersNumber === expectedCharacters) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
