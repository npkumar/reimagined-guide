/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0) return 0
    
    let max = Number.MIN_SAFE_INTEGER
    let min = prices[0]
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else {
            max = Math.max(max, prices[i] - min)
        }
    }
    
    return max === Number.MIN_SAFE_INTEGER ? 0 : max;
};
