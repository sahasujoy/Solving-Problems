var hashTwoSum = function (nums, target) {
    let numHashMap = {};

    for(let i=0; i<nums.length; i++) {
        let component = target - nums[i];
        
        if (component in numHashMap) {
            return [numHashMap[component], i];
        } 

        numHashMap[nums[i]] = i;
    }
}

console.log(hashTwoSum([3,2,1,3], 6));