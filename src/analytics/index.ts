export const getNumberParagraphs = (text: string): number => {
  const paragraphs = text.split("\n");

  if (text === "") {
    return 0;
  }

  if (paragraphs.length === 1) {
    return 1;
  }

  return paragraphs.length;
};

export const getNumberWords = (text: string): number => {
  const words = text.split(" ");

  if (words.at(-1) === "") {
    words.splice(-1, 1);
  }

  if (text === "" || text === " ") {
    return 0;
  }

  return words.length;
};

export const getNumberCharacters = (text: string): number => {
  const characters = text.split("");

  if (characters.at(-1) === "") {
    characters.splice(-1, 1);
  }

  if (text === "" || text === `\n`) {
    return 0;
  }

  return characters.length;
};

export const getShortWordsNumber = (text: string, length: number): number => {
  const words = text.split(" ");
  let shortWords: string[] = [];

  if (text === "" || text === "\n" || text === " ") {
    return 0;
  }

  const reducedWords = words.reduce((shortWord, word) => {
    if (word.length <= length) {
      shortWord = word;
      debugger;
      shortWords.push(shortWord);
      return shortWord;
    }
    return "";
  });

  shortWords.push(reducedWords);

  return shortWords.length;
};
