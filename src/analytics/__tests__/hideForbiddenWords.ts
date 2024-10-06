import { hideForbiddenWords } from "../index.js";

const text = `Esto es un buen de plato`;
const words: string[] = ["mierda", "juego"];
const expectedHidenWordsText = `Esto es un buen de plato`;
const hidenWordsText = hideForbiddenWords(text, words);

if (expectedHidenWordsText === hidenWordsText) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
