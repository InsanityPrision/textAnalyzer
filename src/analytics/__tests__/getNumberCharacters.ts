import { getNumberCharacters } from "../index.js";

let charactersNumber = getNumberCharacters(`Hola que tal `);
let expectedCharacters = 12;

if (charactersNumber === expectedCharacters) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
