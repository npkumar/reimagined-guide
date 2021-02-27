/**
 * https://leetcode.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const reverse = (nums, s, e) => {
        while (s < e) {
            let temp = nums[s]
            nums[s] = nums[e]
            nums[e] = temp
            s++;
            e--;
        }
    }
    
    k = k % nums.length; // should fit within size of array
    
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
    
};
