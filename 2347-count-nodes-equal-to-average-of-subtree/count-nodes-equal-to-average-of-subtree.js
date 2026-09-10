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
var averageOfSubtree = function(root) {
    let count = 0;

    function dfs(node) {
        if (!node) {
            return [0, 0]; // [sum, nodeCount]
        }

        const [leftSum, leftCount] = dfs(node.left);
        const [rightSum, rightCount] = dfs(node.right);

        const currentSum = leftSum + rightSum + node.val;
        const currentCount = leftCount + rightCount + 1;

        // Math.floor handles rounding down for the integer division
        if (Math.floor(currentSum / currentCount) === node.val) {
            count++;
        }

        return [currentSum, currentCount];
    }

    dfs(root);
    return count;
};