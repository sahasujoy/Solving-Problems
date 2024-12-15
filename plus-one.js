/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let r = digits.length - 1;
    let num = 1;

    while (0 <= r) {
        let sum = digits[r] + 1;
    
        let stringSum = sum.toString();
        if (stringSum.length == 1) {
            digits[r] = sum;
            return digits;
        } else {
            digits[r] = parseInt(stringSum[1], 10);
            num = parseInt(stringSum[0], 10);
            r--;
        }
    }

    if (r == -1) {
        digits.unshift(num);
    }
    
    return digits;
};

console.log(plusOne([9]));