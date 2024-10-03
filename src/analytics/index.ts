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

  const textSplited = text.trim().split(/\s/);
  const words = textSplited.filter((word) => word.length > 0);

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

export const getShortWords = (text: string, length = 4): string[] => {
  text.trim();

  if (text.length === 0) {
    return [];
  }

  const words = text.split(/\s/);
  const reducedWords = words.filter(
    (word) => word.length <= length && word.length > 0
  );

  return reducedWords;
};

export const getShortWordsList = (words: string[]): string => {
  if (words.length === 0) {
    return "";
  }

  const joinedWords = words.join(", ");
  debugger;
  return joinedWords;
};
