/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    phi = (1 + Math.sqrt(5)) / 2;
    psi = (1 - Math.sqrt(5)) / 2;

    return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5)) ;
};

console.log(fib(5));


// var fib = function(n) {
//     let left = 0;
//     if (n === 0) return left;
//     let result = 1;
//     let temp;
//     for (let i = 2; i <= n; i++) {
//         temp = left;
//         left = result;
//         result = temp + result;
//     }

//     return result;
// };

// console.log(fib(0));