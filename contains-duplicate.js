/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let uniqueValues = new Set();
    for (let i = 0; i<nums.length; i++) {
        if (uniqueValues.has(nums[i])) {
            return true;
        } else {
            uniqueValues.add(nums[i]);
        }
    }

    return false;
};

console.log(containsDuplicate([1,0]));