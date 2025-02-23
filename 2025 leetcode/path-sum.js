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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    // 현재 노드의 값과 남은 합을 계산
    const remainingSum = targetSum - root.val;
    // 리프 노드이고 남은 합이 0이면 true
    if (!root.left && !root.right && remainingSum === 0) return true;
    // 왼쪽 서브트리와 오른쪽 서브트리에서 경로 찾기
    return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum);
};

hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1], 22);