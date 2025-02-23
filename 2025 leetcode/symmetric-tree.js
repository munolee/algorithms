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
var isSymmetric = function(root) {
    if (!root) return true;
    
    // 왼쪽과 오른쪽 서브트리가 대칭인지 확인하는 헬퍼 함수
    const isMirror = (left, right) => {
        // 둘 다 null이면 대칭
        if (!left && !right) return true;
        // 둘 중 하나만 null이면 비대칭
        if (!left || !right) return false;
        
        // 현재 노드의 값이 같고, 왼쪽의 왼쪽과 오른쪽의 오른쪽이 대칭이며
        // 왼쪽의 오른쪽과 오른쪽의 왼쪽이 대칭이어야 함
        return (left.val === right.val) &&
               isMirror(left.left, right.right) &&
               isMirror(left.right, right.left);
    }
    
    return isMirror(root.left, root.right);
};

isSymmetric([1,2,2,3,4,4,3]);