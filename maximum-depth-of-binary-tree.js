/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;

    let left = maxDepth(root.left); // i got rejection for omitting let or any keyword like that such as const, var ...
    let right = maxDepth(root.right);

    return Math.max(left, right) + 1;
};

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

console.log(maxDepth(new TreeNode(1, new TreeNode(2, 4, 5), 3)));