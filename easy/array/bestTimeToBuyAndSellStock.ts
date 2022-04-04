/**
* https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
*/
function maxProfit(prices: number[]): number {
    let profit = 0;
    let min = prices[0];
    
    for (let i = 1; i < prices.length; i++) {        
        profit = Math.max(profit, prices[i] - min);
        min = Math.min(min, prices[i])
    }
    
    return profit;
};


