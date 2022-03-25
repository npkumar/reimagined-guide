/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree
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

function maxDepth(root: TreeNode | null): number {
  const getDepth = (node: TreeNode | null, depth: number) => {
    if (node === null) return depth;

    return (
      Math.max(getDepth(node.left, depth), getDepth(node.right, depth)) + 1
    );
  };

  return getDepth(root, 0);
}
