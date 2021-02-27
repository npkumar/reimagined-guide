/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}
    for ( let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i]
        
        // Check if current value exists as compliment
        if (map[nums[i]] >= 0) {
            return [map[nums[i]], i]
        } else {
            // Save compliment to map
            map[compliment] = i;
        }
    }
};
