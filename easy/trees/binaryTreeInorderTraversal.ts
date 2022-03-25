/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
  const temp = [];

  const inOrder = (node: TreeNode) => {
    if (node === null) return null;

    inOrder(node.left);
    temp.push(node.val);
    inOrder(node.right);
  };

  inOrder(root);
  return temp;
}
