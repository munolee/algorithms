/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;
    // 중간 요소를 찾아서 루트로 선택
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    // 왼쪽 서브트리 재귀적으로 구성
    root.left = sortedArrayToBST(nums.slice(0, mid));
    // 오른쪽 서브트리 재귀적으로 구성
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;
};

sortedArrayToBST([-10,-3,0,5,9]);