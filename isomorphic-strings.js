/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    let hashMap = {
    }

    let valueSet = new Set();

    for (let i = 0; i < s.length; i++) {
        if (s[i] in hashMap) {
            if (hashMap[s[i]] != t[i]) return false;
        } else {
            if (valueSet.has(t[i])) return false;
            hashMap[s[i]] = t[i];
            valueSet.add(t[i]);
        }
    }

    return true;
};

console.log(isIsomorphic("apple", "nkloe"));