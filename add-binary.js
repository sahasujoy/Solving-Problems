/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
    let small= a;
    let big = b;
    if (b.length < a.length) {
        small = b;
        big = a;
    }

    let l = big.length - 1;
    let r = small.length - 1;

    let carry = 0;
    let result = '';
    let digit = '';

    while (l >= 0) {
        if (r < 0) {
            digit = carry;
            carry = 0
        } else {
            digit = small[r];
        }
        if (digit == '0' && big[l] == '0') {
            if (carry == 1) {
                result = '1' + result;
                carry = 0;
            }
            else {
                result = '0' + result;
            }
            r--;
            l--;
        } else if ((digit == '1' && big[l] == '0') || (digit == '0' && big[l] == '1')) {
            if (carry == 1) {
                result = '0' + result;
                carry = 1;
            }
            else {
                result = '1' + result;
            }
            r--;
            l--;
        } else {
            if (carry == 1) {
                result = '1' + result;
                carry = 1
            } else {
                result = '0' + result;
                carry = 1;
            }
            r--;
            l--;
        }
    }
    if (carry == 1) result = carry + result;

    return result;
}


console.log(addBinary("11", "1"));