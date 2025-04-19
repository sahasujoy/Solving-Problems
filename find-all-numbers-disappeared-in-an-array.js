/**
 * @param {number[]} nums
 * @return {number[]}
 */

//Runtime exceeded code
// var findDisappearedNumbers = function(nums) {
//     let result = [];
//     for (let i=1; i<=nums.length; i++) {
//         if (!nums.includes(i)) {
//             result.push(i);
//         }
//     }

//     return result;
// };

var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); // [5,6]

