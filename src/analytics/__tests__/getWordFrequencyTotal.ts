import { getWordFrequencyTotal } from "../index.js";

const text =
  "Hola que tal soy Erik, Erik me llaman ayer me llamaron erik. Y el otro dia eRiK: o erik;";
const wantedWord = "erik";
const expectedWordFrequencyTotal = 5;
const wordFrequencyTotal = getWordFrequencyTotal(text, wantedWord);

if (wordFrequencyTotal === expectedWordFrequencyTotal) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
