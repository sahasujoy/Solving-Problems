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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let temp = true;
    const balanceCheck = function(root) {
        if (!root) return 0;

        let left = balanceCheck(root.left);
        let right = balanceCheck(root.right);

        if (Math.abs(left - right) > 1) {
            temp = false;
        }
        return Math.max(left, right) + 1;
    }

    balanceCheck(root);
    return temp;
};