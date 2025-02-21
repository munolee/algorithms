/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length === 0) return true;

    let i = 0;
    for (let j = 0; j < t.length; j++) {
        if (s.charAt(i) == t.charAt(j)) {
            if (++i == s.length) return true;
        }
    }
    return false;

};

isSubsequence('abc', 'ahbgdc');