/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    var getPermutations = function (string) {
        if (string.length === 1) return [string];

        let permutaions = [];

        for (let i= 0; i<string.length; i++) {
            let char = string[i];

            let remainingChar = string.slice(0, i) + string.slice(i + 1);

            let remainingPerm = getPermutations(remainingChar);

            for (item of remainingPerm) {
                permutaions.push(char + item);
            }
        }

        return permutaions;
    }
    let permutions =  getPermutations(s1);

    if (s1.length > s2.length) return false;
    console.log(permutions);

    for (let i= 0; i<= s2.length - s1.length; i++) {
        let subString = s2.slice(i, s1.length + i);

        console.log(subString);

        if (permutions.includes(subString)) {
            return true;
        }
    }

    return false;
};

console.log(checkInclusion("abcdxabcde", "abcdeabcdx"));