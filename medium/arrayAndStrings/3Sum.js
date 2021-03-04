/**
 * https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;
    
    while (l < r) {
      const s = nums[i] + nums[l] + nums[r];
      if (s < 0) {
          l++
      } else if (s > 0) {
          r--
      } else {
        result.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r--
        l++
        r--
      }
    }
  }
  
  return result;
};
