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
  if (text === "" || text === " ") {
    return 0;
  }
  return words.length;
};
