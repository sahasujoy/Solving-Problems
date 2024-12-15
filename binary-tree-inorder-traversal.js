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
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    let result = [];

    let traverse = function (node) {
        if (node != null) {
            traverse(node?.left);
            result.push(node.val);
            traverse(node?.right);
        }
    }

    traverse(root);
    return result;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));\
const tree = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(4),
        new TreeNode(5, new TreeNode(6), new TreeNode(7))
    ),
    new TreeNode(3, null, new TreeNode(8, new TreeNode(9)))
);

// [1,2,3,4,5,null,8,null,null,6,7,9]
console.log(inorderTraversal(tree));