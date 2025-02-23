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
    if (!root) return true;

    // 트리의 높이를 계산하는 함수
    const getHeight = (node) => {
        if (!node) return 0;
        return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    }

    // 왼쪽과 오른쪽 서브트리의 높이 차이를 계산
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
    const heightDiff = Math.abs(leftHeight - rightHeight);
    
    // 높이 차이가 1 이하이고, 왼쪽과 오른쪽 서브트리가 모두 균형 트리인지 확인
    return heightDiff <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

isBalanced([3,9,20,null,null,15,7]);