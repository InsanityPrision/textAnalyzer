export const getNumberParagraphsTotal = (text: string): number => {
  const paragraphs = text.split("\n\n");

  if (text.length === 0) {
    return 0;
  }

  return paragraphs.length;
};

export const getNumberWordstotal = (text: string): number => {
  if (text.length === 0) {
    return 0;
  }

  text.trim();

  const words = text.split(" ");

  return words.length;
};

export const getNumberCharactersTotal = (text: string): number => {
  if (text.length === 0) {
    return 0;
  }

  text.trim();

  const characters = text.split("");

  return characters.length;
};

export const getShortWordsNumberTotal = (text: string, length = 4): number => {
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
