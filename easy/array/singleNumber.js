/**
 * https://leetcode.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            delete map[nums[i]]
        } else {
            map[nums[i]] = true;
        }
    }
    
    // Only one remaining
    return Object.keys(map)[0]
};
