/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const result = []
    const inOrder = (root) => {
        if (root === null) return
        inOrder(root.left)
        result.push(root.val)
        inOrder(root.right)
    }
    
    inOrder(root)
    // inorder traversal results in sorted array
    return result[k-1]
};
