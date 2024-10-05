import { getShortWordsTotal } from "../index.js";

const expectedResult = 0;
const phrase = `
`;
const result = getShortWordsTotal(phrase);

if (result === expectedResult) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
