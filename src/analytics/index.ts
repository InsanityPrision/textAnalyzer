const isTextEmpty = (text: string): boolean => {
  if (text.length === 0) {
    return true;
  }
  return false;
};

const getWords = (text: string): string[] => {
  const words = text.trim().split(/\s/);
  return words;
};

export const getParagraphsTotal = (text: string): number => {
  if (isTextEmpty(text)) {
    return 0;
  }

  const paragraphs = text.split("\n\n");

  return paragraphs.length;
};

export const getWordsTotal = (text: string): number => {
  if (isTextEmpty(text)) {
    return 0;
  }

  const words = getWords(text).filter((word) => word.length > 0);

  return words.length;
};

export const getCharactersTotal = (text: string): number => {
  if (isTextEmpty(text)) {
    return 0;
  }

  const characters = text.trim().split("");

  return characters.length;
};

export const getShortWordsTotal = (text: string, length = 4): number => {
  if (isTextEmpty(text)) {
    return 0;
  }

  const words = getWords(text);
  const shortWords = words.filter(
    (word) => word.length <= length && word.length > 0
  );

  return shortWords.length;
};

export const getShortWords = (text: string, length = 4): string[] => {
  if (isTextEmpty(text)) {
    return [];
  }

  const words = getWords(text);
  const shortWords = words.filter(
    (word) => word.length <= length && word.length > 0
  );

  return shortWords;
};

export const getShortWordsList = (words: string[]): string => {
  if (words.length === 0) {
    return "";
  }

  const joinedWords = words.join(", ");

  return joinedWords;
};

export const getPalindromeList = (text: string): string[] => {
  if (isTextEmpty(text)) {
    return [];
  }

  const words = getWords(text);
  const palindrome = words
    .reverse()
    .filter(
      (word) => word === word.split("").reverse().join("") && word.length > 2
    );

  return palindrome;
};

export const getWordFrequencyTotal = (
  text: string,
  wantedWord: string
): number => {
  if (isTextEmpty(text)) {
    return 0;
  }

  const words = text.split(/\s+/g);
  const wordsFrequency = words.filter(
    (word) =>
      word.toLowerCase().replace(/[,;:.]/, "") ===
      wantedWord.toLowerCase().replace(/[,;:.]/, "")
  );

  return wordsFrequency.length;
};

export const getReversedWords = (text: string): string => {
  if (isTextEmpty(text)) {
    return "";
  }

  const words = getWords(text);
  const reversed = words
    .join(" ")
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ");

  return reversed;
};

export const getReversedText = (text: string): string => {
  if (isTextEmpty(text)) {
    return "";
  }

  const words = getWords(text).reverse().join(" ");

  return words;
};

export const hideForbiddenWords = (
  text: string,
  wordsList: string[]
): string => {
  if (isTextEmpty(text)) {
    return "";
  }

  let hideForbiddenWords = text;

  for (let word of wordsList) {
    const newText = hideForbiddenWords.replaceAll(word, "****");
    hideForbiddenWords = newText;
  }

  return hideForbiddenWords;
};

export const trasformToCamelCase = (text: string): string => {
  if (isTextEmpty(text)) {
    return "";
  }

  const textInCamelCase = getWords(text)
    .map((word) => {
      const capitalLetter = word.charAt(0).toUpperCase();

      return capitalLetter + word.slice(1);
    })
    .join("");

  return textInCamelCase;
};

export const trasformToKebabCase = (text: string): string => {
  if (isTextEmpty(text)) {
    return "";
  }

  const textInKebabCase = text
    .toLocaleLowerCase()
    .split(/\s/)
    .join("-")
    .replaceAll("--", "-");

  return textInKebabCase;
};

export const transformToSnakeCase = (text: string): string => {
  if (isTextEmpty(text)) {
    return "";
  }

  const textInSnakeCase = text
    .toLocaleLowerCase()
    .split(/\s/)
    .join("_")
    .replaceAll("__", "_");

  return textInSnakeCase;
};
