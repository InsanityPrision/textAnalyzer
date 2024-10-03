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

export const getShortWordsNumber = (text: string, length = 4): number => {
  text.trim();

  if (text.length === 0) {
    return 0;
  }

  const words = text.split(/\s/);
  const reducedWords = words.filter(
    (word) => word.length <= length && word.length > 0
  );

  return reducedWords.length;
};
