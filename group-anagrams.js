/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = [];
    let hash = {};
    for (let i=0; i<strs.length; i++) {
        // let strCodeSum = 0;
        // for (j=0; j< strs[i].length; j++) {
        //     strCodeSum += strs[i].charCodeAt(j);
        //     console.log(strCodeSum);
        // }

        let temp = strs[i].split('').sort().join('');
        console.log(temp);

        // if (strCodeSum in hash) {
        //     result[hash[strCodeSum]].push(strs[i]);
        // } else {
        //     hash[strCodeSum] = result.length;
        //     result.push([strs[i]]);
        // }

        // console.log(result, "result");
        // console.log(hash, "hash");
    }

    return result;
};

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams(["abc", "bca", "ad", "bc"]));

console.log(btoa('{"pageId":50,"websiteId":45}'));