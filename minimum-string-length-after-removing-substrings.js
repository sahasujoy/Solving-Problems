/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let chars = [];
    for (let i =0; i<s.length; i++) {
        if (s[i] === 'B' && chars[chars.length - 1] === 'A') chars.pop();
        else if (s[i] === 'D' && chars[chars.length - 1] === 'C') chars.pop();
        else chars.push(s[i]);
        console.log(chars);
    }
    console.log(chars);
    return chars.length;
};


console.log(minLength('ACBBD'));