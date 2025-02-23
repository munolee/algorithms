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
    // 왼쪽과 오른쪽 서브트리의 최대 깊이를 재귀적으로 계산
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

maxDepth([3,9,20,null,null,15,7]);