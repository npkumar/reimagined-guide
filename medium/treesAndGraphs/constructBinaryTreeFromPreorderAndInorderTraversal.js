/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * left nodes with ( ) and right nodes with [ ], otherwise root:
 * preorder: 1 (2 4 5) [3 6]
 * inorder: (4 2 5) 1 [3 6]
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    
    const build = (pStartIndex, pLastIndex, iStartIndex, iLastIndex) => {
        // base check
        if (pStartIndex > pLastIndex || iStartIndex > iLastIndex) return null;

        // root value
        const rootValue = preorder[pStartIndex];
        
        // get root position from inorder
        const indexRootInorder = inorder.indexOf(rootValue);
        
        // get num of nodes on left subtree
        const numNodesLeftSubtree = indexRootInorder - iStartIndex;

        // build root node
        const root  = new TreeNode(rootValue);
        // build the left and right subtrees
        root.left  = build(pStartIndex + 1, pStartIndex + numNodesLeftSubtree, iStartIndex, indexRootInorder - 1);
        root.right = build(pStartIndex + numNodesLeftSubtree + 1, pLastIndex, indexRootInorder + 1, iLastIndex);

        return root;
    }
    
    return build(0, preorder.length - 1, 0, inorder.length - 1);
};
