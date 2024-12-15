/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let number = x;
    let power = number.toString().length - 1;
    let divider = Math.pow(10, power);
    let sum = 0;
    let i = 1;
    while(power >= 0) {
        sum = sum + (Math.floor(number / divider) * i);
        number = number % divider;
        i = i * 10;
        power = power - 1;
        divider = Math.pow(10, power);
    }

    if (x == sum) return true;
    return false;
};


var isPalindromes = function(x) {
    if (x < 0) return false;
    let number = x.toString();
    let right = number.length - 1;
    let left = 0

    while (left <= right) {
        if(number[left] != number[right]) {
            return false;
        } 
        left++;
        right--;
    }

    return true;

};

console.log(isPalindromes(121));