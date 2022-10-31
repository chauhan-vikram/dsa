const c = console.log;

const mergeSortedArrays = (arr1, arr2) => {
  let mArr = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      mArr.push(arr2[j]);
      j++;
    } else {
      mArr.push(arr1[i]);
      i++;
    }
  }

  return mArr;
};

c(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
