let c = console.log;

const binarySearch = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else return middle;
  }
  return -1;
};

c(
  binarySearch(
    [1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29, 45, 47, 49, 100, 102, 103],
    49
  )
);
