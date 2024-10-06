import { getShortWordsTotal } from "../index.js";

const expectedResult = 0;
const phrase = `
`;
const shortWordsTotal = getShortWordsTotal(phrase);

if (shortWordsTotal === expectedResult) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
