let start;
var twoSum = function (nums, target) {
  start = new Date().getTime();
  let nums2 = [...nums].sort((a, b) => a - b);
  let i = 0;
  let j = nums2.length - 1;
  let numbers = [];
  let indices = [];
  [2, 3, 4];
  while (i < j && numbers.length !== 2 && j < nums2.length) {
    sum = nums2[i] + nums2[j];
    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    } else if (sum === target) {
      numbers.push(nums2[i]);
      numbers.push(nums2[j]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (
      (nums[i] === numbers[0] || nums[i] === numbers[1]) &&
      indices.length < 2
    ) {
      indices.push(i);
    }
  }
  return indices;
};

console.log(
  twoSum(
    Array.from({ length: 10000 }, (_, i) => i + 1),
    19999
  )
);
console.log(new Date().getTime() - start);
