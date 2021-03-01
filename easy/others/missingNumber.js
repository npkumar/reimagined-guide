/**
 * https://leetcode.com/problems/missing-number/
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    const expected = Math.floor((n * (n + 1) / 2))
    const currentSum = nums.reduce((acc, val) => acc + val, 0)
    return expected - currentSum;
};
