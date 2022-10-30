let c = console.log;

const maxSubArraySum = (arr, n) => {
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  let maxSum2 = maxSum;
  for (let i = n; i < arr.length; i++) {
    maxSum2 = maxSum2 - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, maxSum2);
  }
  return maxSum;
};

c(maxSubArraySum([100, 200, 300, 400], 2));
