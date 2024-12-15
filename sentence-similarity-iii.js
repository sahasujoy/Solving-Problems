/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
// var areSentencesSimilar = function(sentence1, sentence2) {
//     let big = sentence2;
//     let small = sentence1;
//     if (sentence1.length > sentence2.length) {
//         big = sentence1;
//         small = sentence2;
//     }

//     let longestPrefix = '';
//     let longestSuffix = '';
    
//     let r = big.length - 1;

//     for (let i = 0; i< small.length; i++) {
//         if (small[i] === big[i]) {
//             longestPrefix = longestPrefix + small[i];
//         } else {
//             break;
//         }
//         if (longestPrefix.length === small.length && )return true;
//     }

//     for (let i = small.length - 1; i>= 0; i--) {
//         if (small[i] === big[r]) {
//             longestSuffix = small[i] + longestSuffix;
//             r--;
//         } else {
//             break;
//         }
//         if (longestSuffix.length == small.length && big[longestSuffix.length] == '') return true;
//     }

//     console.log(longestPrefix.length);
//     console.log(longestSuffix.length);

//     if (longestSuffix.length == 0 && longestPrefix == 0) return false;
//     if (longestPrefix == longestSuffix) return true;
//     if (longestPrefix && big[longestPrefix.length] == ' ' && !longestSuffix) return true;
//     if (longestSuffix && big[(big.length - longestSuffix.length) - 1] == ' ' && !longestPrefix) return true; 
//     if (longestPrefix && longestSuffix &&  longestSuffix[0] == ' ' && longestPrefix[longestPrefix.length - 1] == ' ') return true;
//     if (longestPrefix.length + longestSuffix.length -1 != small.length) return false;
//     return false;

    // while (l <= r) {
    //     if (big[l] == small[l] && big[rBig] == small[r]) {
    //         longestPrefix += small[l];
    //         l++;

    //         longestSuffix = small[r] + longestSuffix;
    //         rBig--;
    //         r--;
    //     } 
    //     if (big[rBig] == small[r]) {
    //         longestSuffix = small[r] + longestSuffix;
    //         rBig--;
    //         r--;
    //     }

    // }


// };

/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    // Split the sentences into arrays of words
    const words1 = sentence1.split(' ');
    const words2 = sentence2.split(' ');
    
    // Initialize prefix and suffix pointers
    let prefixLength = 0;
    let suffixLength = 0;
    
    // Check for common prefix by comparing word by word
    while (prefixLength < words1.length && prefixLength < words2.length && words1[prefixLength] === words2[prefixLength]) {
        prefixLength++;
    }
    
    // Check for common suffix by comparing word by word from the end
    while (suffixLength < words1.length - prefixLength && suffixLength < words2.length - prefixLength && 
           words1[words1.length - 1 - suffixLength] === words2[words2.length - 1 - suffixLength]) {
        suffixLength++;
    }
    
    // The sentences are similar if the sum of the prefix and suffix covers the entire smaller sentence
    return (prefixLength + suffixLength) >= Math.min(words1.length, words2.length);
};


console.log(areSentencesSimilar("B", "ByI BMyQIqce b bARkkMaABi vlR RLHhqjNzCN oXvyK zRXR q ff B yHS OD KkvJA P JdWksnH"));