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
var minDepth = function(root) {
    if (!root) return 0;
    // 루트 노드가 있는 경우 최소 깊이는 1
    if (!root.left && !root.right) return 1;
    // 왼쪽 서브트리의 최소 깊이
    const leftDepth = root.left ? minDepth(root.left) : Infinity;
    // 오른쪽 서브트리의 최소 깊이
    const rightDepth = root.right ? minDepth(root.right) : Infinity;
    // 둘 중 작은 값을 반환
    return 1 + Math.min(leftDepth, rightDepth);
};

minDepth([3,9,20,null,null,15,7]);