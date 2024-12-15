/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let result = 1;
    let left = 1;
    let leftValue;
    for(var i = 2; i<= n; i++) {
        leftValue = left;
        left = result;
        result = leftValue + result;
    }

    return result;
};

console.log(climbStairs(5));