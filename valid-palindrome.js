/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const phrase = s.toLowerCase();

    let i = 0;
    let j = phrase.length - 1;
    let left = '';
    let right = '';

    while (i <= j) {
        if(phrase[i] >= 'a' && phrase[i] <= 'z' || phrase[i] >= '0' && phrase[i] <= '9') {
            left = phrase[i];
        } else {
            i++;
            continue;
        } 

        if(phrase[j] >= 'a' && phrase[j] <= 'z' || phrase[j] >= '0' && phrase[j] <= '9') {
            right = phrase[j];
        } else {
            j--;
            continue;
        }

        if (left != right) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));