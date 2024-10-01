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
