// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// var trap = function(height) {
//     let level = 0;
//     let water = [];
//     let temp = 0; 
//     let result = 0;
//     let j = height.length - 1;
//     let lmax = 0;
//     let rmax = 0;
//     for(let i = 0; i <height.length; i++) {
//         if (height[i] < height[j]) {
//             level = height[i];
//             if (rxam < height[j]) {
//                 rmax = height[j];
//             }
//         } else {
//             level = height[j];
//             if (lmax < height[i]) {
//                 lmax = height[i];
//             }
//         }
//         // level = height[i] < height[j] ? height[i] : height[j];
//         if (temp <= level) {
//             temp = level;
//         } else {
//             result = result + (temp - height[i]);
//         }
//         // temp = level;
//         water.push(level);
//         j--;
//     }
//     console.log(water);

//     return result;
// };

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0;
    let l = 0;
    let r = height.length - 1;
    let lmax = 0;
    let rmax = 0;
    while(l <= r) {
        if (height[l] <= height[r]) {
            if(lmax < height[l]) {
                lmax = height[l];
            } else {
                result = result + (lmax - height[l]);
                l++
            }
        } else {
            if(rmax < height[r]) {
                rmax = height[r];
            } else {
                result = result + (rmax - height[r]);
                r--
            }
        }
    }
   

    return result;
};

console.log(trap([4,2,0,6,2,5]));

// It learned me a lot. Just amazing...