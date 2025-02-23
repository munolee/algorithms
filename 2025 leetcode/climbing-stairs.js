/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;
    let prev = 1;
    let curr = 2;
    for (let i = 3; i <= n; i++) {
        const temp = curr;
        curr = prev + curr;
        prev = temp;
    }
    return curr;
};

climbStairs(2);