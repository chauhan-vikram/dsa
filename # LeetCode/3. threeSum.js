const threeSum = (nums) => {
  nums = nums.sort((a, b) => a - b);
  //console.log(nums);
  let triplets = [];

  for (let x = 0; x < nums.length; x++) {
    if (x > 0 && nums[x] === nums[x - 1]) continue;
    let i = x + 1;
    let j = nums.length - 1;
    while (i < j) {
      let sum = nums[i] + nums[j];
      if (sum > -nums[x]) {
        j--;
      } else if (sum < -nums[x]) {
        i++;
      } else if (sum === -nums[x]) {
        if (
          (i != j && j != x && i != x && nums[i] !== nums[i - 1]) ||
          nums[j] !== nums[j + 1]
        ) {
          //console.log(x, nums[x], i, nums[i], j, nums[j]);
          triplets.push([nums[x], nums[i], nums[j]]);
        }
        // i = nums.length - 1;
        i++;
        j--;
      }
    }
  }

  return triplets;
};

//console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-2, 0, 0, 2, 2]));
