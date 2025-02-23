/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const binary = n.toString(2);
    return binary.split('1').length - 1;
};

hammingWeight(11);