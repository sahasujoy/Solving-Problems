// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// MCMXCIV
// 1994

// 1000+100+(1000-200)+10+(100-20)+1+(5-2)


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    let prev = '';
    for (let char of s) {
        if (char == 'M') {
            if(prev == 'C') result += (1000-200);
            else result = result + 1000;
        } else if (char == 'D') {
            if(prev == 'C') result += (500-200);
            else result = result + 500;
        } else if (char == 'C') {
            if(prev == 'X') result += (100-20);
            else result = result + 100;
        } else if (char == 'L') {
            if(prev == 'X') result += (50-20);
            else result = result + 50;
        } else if (char == 'X') {
            if(prev == 'I') result += (10-2);
            else result = result + 10;
        } else if (char == 'V') {
            if(prev == 'I') result += (5-2);
            else result = result + 5;
        } else {
            result += 1;
        }
        prev = char;
    }

    return result;
};

console.log(romanToInt('MCMXCIV'));