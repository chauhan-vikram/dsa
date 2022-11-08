let start;
var twoSum = function (nums, target) {
  start = new Date().getTime();
  let lookup = {};
  let final = [];

  for (let i = 0; i < nums.length; i++) {
    if (!lookup[nums[i]]) lookup[nums[i]] = i + 1;

    if (lookup[target - nums[i]] && lookup[target - nums[i]] - 1 !== i) {
      console.log(lookup);
      final.push(lookup[target - nums[i]] - 1, i);
      break;
    }
  }
  return final;
};
//console.log(Array.from({ length: 100 }, (_, i) => i + 1));
console.log(
  twoSum(
    Array.from({ length: 10000 }, (_, i) => i + 1),
    19999
  )
);
console.log(new Date().getTime() - start);
