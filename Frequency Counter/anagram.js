let c = console.log;

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let obj1 = {};
  let obj2 = {};
  let returnValue = true;
  for (let char of str1) {
    obj1[char] ? obj1[char]++ : (obj1[char] = 1);
  }
  for (let char of str2) {
    if (!obj1[char]) returnValue = false;
    else if (obj1[char]) obj1[char]--;
  }
  return returnValue;
};

c(validAnagram("rat", "car"));
