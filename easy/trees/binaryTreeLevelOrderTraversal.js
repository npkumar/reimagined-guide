/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return []
    
    const result = []
    const queue = [ root ]
    
    while(queue.length !== 0) {
        const temp = []
        // temp level array
        const size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            temp.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        
        result.push(temp)
    }
    
    return result;
};
