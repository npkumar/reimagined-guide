/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null
    
    const makeTree = (nums, l, r) => {
        if (l > r) return null;
        
        const mid = Math.floor((l + r) / 2)
        const temp = new TreeNode(nums[mid])
        temp.left = makeTree(nums, l, mid - 1)
        temp.right = makeTree(nums, mid + 1, r)
        return temp
    }
    
    return makeTree(nums, 0, nums.length - 1)
};
