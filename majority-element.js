/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let store = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in store) {
            store[nums[i]] ++;
        } else {
            store[nums[i]] = 1;
        }
    }

    const result = Object.entries(store).reduce((max, [key, value]) => {
        return value > store[max] ? key : max;
    }, Object.keys(store)[0]);

    return parseInt(result);
};

console.log(majorityElement([2,1,2,3,2,4,2]));