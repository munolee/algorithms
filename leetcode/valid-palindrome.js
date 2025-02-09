/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let j = s.length - 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[j]) {
            return false;
        }
        j--;
    }
    return true;
};
isPalindrome("A man, a plan, a canal: Panama");