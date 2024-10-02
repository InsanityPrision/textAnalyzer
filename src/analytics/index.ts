export const getNumberParagraphs = (text: string): number => {
  const paragraphsNumber = text.split("\n");
  if (text === "") {
    return 0;
  }
  if (paragraphsNumber.length === 1) {
    return 1;
  }
  return paragraphsNumber.length;
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
