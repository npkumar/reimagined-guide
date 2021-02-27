/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const result = []
    let isValid = true;
    
    const inOrder = (node) => {
        if (node === null) return;
        
        inOrder(node.left)
        
        // Before adding check if is in acending order
        if (result.length > 0 && result[result.length - 1] >= node.val) {
            isValid = false;
        }
        
        result.push(node.val)
        inOrder(node.right)
    }
    
    inOrder(root);
    
    return isValid;
};
