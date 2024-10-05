import { hideForbiddenWords } from "../index.js";

const text = `Esto es un buen de plato`;
const wordList: string[] = ["mierda", "juego"];
const expectedHidenWordsText = `Esto es un buen de plato`;
const hidenWordsText = hideForbiddenWords(text, wordList);

if (expectedHidenWordsText === hidenWordsText) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
