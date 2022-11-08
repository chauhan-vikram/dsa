var maxSubArray = function (nums) {
  //nums = nums.sort((a, b) => a - b);
  console.log(nums);
  let final = [];
  let finalSum = 0;

  let j = nums.length - 1;

  while (j >= 0) {
    if (nums[j] + finalSum > finalSum) {
      finalSum += nums[j];
      final.push(j);
    } else break;
    j--;
  }
  return finalSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
