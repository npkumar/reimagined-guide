/**
 * https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    
    let max = nums[0]
    let dp = [ nums[0] ]
    
    for (let i = 1; i < nums.length; i++) {
        // max is current value or current value + prev max value
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
        
        // update max
        max = Math.max(max, dp[i])
    }
    
    return max;
};
