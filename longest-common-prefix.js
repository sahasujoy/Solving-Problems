/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//     let temp = '';
//     if(!strs[0].length) return temp;
//     for(let i = 0; i<strs[0].length; i++) {
//         console.log("running");
//         let char = '';
//         for(let j = 0; j<strs.length - 1 ; j++) {
//             if(strs[j][i] && strs[j+1][i]&& strs[j][i] != strs[j+1][i]) return temp;
//             char = strs[j+1][i];
//         }
//         temp = temp + char;
//     }
// };

var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    let prefixLength = prefix.length;

    for (let i = 1; i < strs.length; i++) {
        let s = strs[i];
        while (prefix !== s.substring(0, prefixLength)) {
            prefixLength--;
            if (prefixLength === 0) {
                return "";
            }
            prefix = prefix.substring(0, prefixLength);
        }
    }

    return prefix;    
};