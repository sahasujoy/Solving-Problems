/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31)) {
        return 0;
    }

    let isNegative = x < 0;
    if (isNegative) {
        x = Math.abs(x);
    }
    let result = 0;
    while (x > 0) {
        let digit = x % 10;
        x = Math.floor(x / 10);

        result = result * 10 + digit;

        if (result > Math.pow(2, 31) - 1) {
            return 0;
        }
    }

    return isNegative ? -result : result;
};

console.log(reverse(1501));