// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const getDuplicates = function (data) {
//     let duplicates = [];
//     for(let i = 0; i<data.k; i++) {
//         duplicates.push(data.nums[data.index[i]]);
//     }

//     const result = data.result;
//     const k = data.k;

//     return {
//         result, k, duplicates
//     };
// }

// var removeDuplicates = function(nums) {
//     let current = nums[0];
//     let result = [];
//     let k = 0;
//     let index = [];
//     for(let i = 1; i < (nums.length); i++) {
//         if(current != nums[i]) {
//             result.push(current);
//             current = nums[i];
//         } else {
//             k = k +1;
//             index.push(i);
//         }
//     }

//     result.push(current);

//     const data = {
//         result, k, index, nums
//     };

//     // console.log(getDuplicates(data));
//     const assertion = getDuplicates(data);
//     return assertion;
// };



// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));



var trap = function (height) {
    let n = height.length; vol = 0
    let l = 0, r = n - 1, lMax = 0, rMax = 0
    while (l <= r) {
        if (height[l] <= height[r]) {
            if (height[l] > lMax) lMax = height[l]
            else {
                vol += lMax - height[l]
                l++
            }
        } else {
            if (height[r] > rMax) rMax = height[r]
            else {
                vol += rMax - height[r]
                r--
            }
        }
    }
    return vol
}

console.log(trap([0,2,0]));