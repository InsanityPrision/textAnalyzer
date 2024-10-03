import { getPalindromeList } from "../index.js";

const text = "Hola que tal";
const expectedPalindromeList: string[] = [""];
const palindromeList = getPalindromeList(text);

if (palindromeList === expectedPalindromeList) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
