var lengthOfLastWord = function (s) {
    let i = s.length - 1;

    while (s[i] === ' ') {
        i--;
    }

    let count = 0;
    while (s[i] !== ' ') {
        i--;
        count += 1;
    }

    return count;
}


console.log(lengthOfLastWord('   hey   how are yo  '));