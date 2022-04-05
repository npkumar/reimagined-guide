/**
* https://leetcode.com/problems/majority-element/
* /
function majorityElement(nums: number[]): number {
    const minReq = Math.floor(nums.length / 2);
    
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
            
            if (map[nums[i]] > minReq) return nums[i]
        } else {
            map[nums[i]] = 1;
        }
    }
    
    // In case single ele array
    return nums[0];
};
