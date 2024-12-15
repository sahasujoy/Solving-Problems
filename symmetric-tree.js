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
// var isSymmetric = function(root) {
//     let leftNodes = [];
//     let rightNodes = [];

//     let inorderTraversal = function(node) {
//         if (node != null) {
//             inorderTraversal(node.left);
//             leftNodes.push(node.val);
//             inorderTraversal(node.right);
//         }
//     }

//     let reverseInorderTraversal = function(node) {
//         if (node != null) {
//             reverseInorderTraversal(node.right);
//             rightNodes.push(node.val);
//             reverseInorderTraversal(node.left);
//         }
//     }

//     if (!root.left && !root.right) {
//         return true;
//     }

//     inorderTraversal(root.left);
//     reverseInorderTraversal(root.right);

//     if (leftNodes.length != rightNodes.length) {
//         return false;
//     }
//     for (let i = 0; i< leftNodes.length; i++) {
//         if (leftNodes[i] != rightNodes[i]) {
//             return false;
//         }
//     }

//     return true;
// };

var isSymmetric = function (root) {
    let checkSymmetric = function (left, right) {
        if (!left && !right) {
            return true;
        }

        if (!left || !right) {
            return false;
        }

        return left.val === right.val && checkSymmetric(left.left, right.right) && checkSymmetric(left.right, right.left);
    }

    return checkSymmetric(root.left, root.right);
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const tree = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(2)
    ),
    new TreeNode(2,
        new TreeNode(2)
    )
); // this tree failed the approach...

console.log(isSymmetric(tree));