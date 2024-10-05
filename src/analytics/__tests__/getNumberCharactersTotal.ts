import { getCharactersTotal } from "../index.js";

let charactersNumber = getCharactersTotal(`Hola que tal `);
let expectedCharacters = 13;

if (charactersNumber === expectedCharacters) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
