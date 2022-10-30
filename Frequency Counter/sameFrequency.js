let c = console.log;

const sameFrequency = (num1, num2) => {
  num1 = num1.toString();
  num2 = num2.toString();

  let lookup = {};

  for (let char of num1) {
    lookup[char] ? lookup[char]++ : (lookup[char] = 1);
  }
  c(lookup);
  for (let char of num2) {
    if (lookup[char]) {
      lookup[char]--;
    } else if (!lookup[char]) return false;
  }
  return true;
};

c(sameFrequency(3589578, 5879385));
