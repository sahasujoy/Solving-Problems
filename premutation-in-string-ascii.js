/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    let s1Count = new Array(26).fill(0);
    let s2Count = new Array(26).fill(0);

    var getCode = function (char) {
        let code = char.charCodeAt(0) - 'a'.charCodeAt(0);
        return code;
    } 

    for (let i = 0; i < s1.length; i++) {
        s1Count[getCode(s1[i])]++;
        s2Count[getCode(s2[i])]++;
    }

    var matches = function () {
        return s1Count.every((item, index) => item === s2Count[index]);
    }

    for (let i= s1.length; i< s2.length; i++) {
        if (matches()) return true;

        s2Count[getCode(s2[i])]++;
        s2Count[getCode(s2[i - s1.length])]--;
    }

    return matches();
};

console.log(checkInclusion('abcdxabcde', 'abcdeabcdx'));