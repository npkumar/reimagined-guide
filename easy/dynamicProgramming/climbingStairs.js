/**
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 0 ) return 0
    let ways = [1, 2]
    if (n <= 2) return ways[n-1]
    
    for (let i = 2; i < n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2]
    }
    
    return ways[n - 1]
};
