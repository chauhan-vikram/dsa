const romanToInt = (s) => {
  const romanCharToInt = (roman) => {
    let int;
    switch (roman) {
      case "I":
        int = 1;
        break;
      case "V":
        int = 5;
        break;
      case "X":
        int = 10;
        break;
      case "L":
        int = 50;
        break;
      case "C":
        int = 100;
        break;
      case "D":
        int = 500;
        break;
      case "M":
        int = 1000;
        break;
    }
    return int;
  };

  let int = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let curr = romanCharToInt(s[i]);
    let last = i < s.length - 1 ? romanCharToInt(s[i + 1]) : 0;
    console.log(i, s[i], curr, last);
    if (curr >= last) {
      int += curr;
    } else if (curr < last) {
      int -= curr;
    }
  }
  return int;
};

console.log(romanToInt("III"));
