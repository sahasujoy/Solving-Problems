/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }

    let charCount = new Array(128).fill(0);

    for(let i=0; i<s.length; i++) {
        charCount[s.charCodeAt(i)]++;
        charCount[t.charCodeAt(i)]--;
    }

    for (let count of charCount) {
        if (count != 0) {
            console.log('hey', count);
            return false;
        }
    }
    return true;
};
