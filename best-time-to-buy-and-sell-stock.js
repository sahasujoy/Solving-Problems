/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     if (prices.length === 1) return 0;

//     let profit = 0;

//     for (let i = 0; i < prices.length - 1; i++) {
//         for (let j = i+1; j < prices.length; j++) {
//             let diff = prices[j] - prices[i];
//             if ( diff > profit) {
//                 profit = diff;
//             }
//         }
//     }

//     return profit;
// };

var maxProfit = function(prices) {
    if (prices.length === 1) return 0;

    let maxProfit = 0;
    let minPrice = Infinity;

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
};

console.log(maxProfit([7,6,4,3,1]));