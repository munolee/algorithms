/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let i = 0; i < nums.length ; i ++) {
        currentSum += nums[i];
        maxSum = Math.max(maxSum, currentSum);
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
