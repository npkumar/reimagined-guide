/**
 * https://leetcode.com/problems/reverse-string/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const size = s.length;
    
    for (let i = 0; i < size / 2; i++) {
        let t = s[i]
        s[i] = s[size - i - 1]
        s[size - i - 1] = t
    }
};
