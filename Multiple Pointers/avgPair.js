let c = console.log;

const avgPair = (arr, avg) => {
  let i = 0;
  let j = arr.length - 1;
  avg *= 2;

  while (j > i) {
    let sum = arr[i] + arr[j];
    if (sum === avg) {
      return true;
    } else if (sum >= avg) {
      j--;
    } else if (sum <= avg) {
      i++;
    }
  }
  return false;
};

c(avgPair([-1, 0, 3, 4, 5, 6], 4.1));
