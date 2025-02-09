/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let min = prices[0];
    let profit = 0;

    for(let i = 0 ; i < prices.length ; i++) {
        min = Math.min(min, prices[i]);
        profit = Math.max(profit, prices[i] - min);
    }
    return profit;
};
maxProfit([7,1,5,3,6,4]);