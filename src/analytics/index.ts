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
