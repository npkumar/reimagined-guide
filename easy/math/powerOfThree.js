/**
 * https://leetcode.com/problems/power-of-three/
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    for (let i = 1; i <= n; i = i * 3) {
        if (i === n) return true
    }
    return false;
};
