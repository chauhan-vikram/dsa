let c = console.log;

const letterCombinations = (digits) => {
  const digitToChar = (digit) => {
    if (digit === "2") return "abc";
    if (digit === "3") return "def";
    if (digit === "4") return "ghi";
    if (digit === "5") return "jkl";
    if (digit === "6") return "mno";
    if (digit === "7") return "pqrs";
    if (digit === "8") return "tuv";
    if (digit === "9") return "wxyz";
  };

  let chars = [];
  for (let char of digits) {
    chars.push(digitToChar(char).split(""));
  }
  c(chars);
  const recurse = (arr1, arr2) => {};
};

c(letterCombinations("23"));
