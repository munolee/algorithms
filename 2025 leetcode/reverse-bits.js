/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let binaryStr = n.toString(2).padStart(32, '0');
    let reversedBinaryStr = binaryStr.split("").reverse().join("");
    return parseInt(reversedBinaryStr, 2);
};

console.log(reverseBits(43261596));  // Output: 964176192