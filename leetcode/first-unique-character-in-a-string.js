/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
    }
    return s.split('').findIndex((char) => map.get(char) === 1);
};

console.log(firstUniqChar("leetcode")); // 0