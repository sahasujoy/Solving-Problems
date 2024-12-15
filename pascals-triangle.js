/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let resultArray = [];
    for (let i = 0; i< numRows; i++) {
        let insideArray = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                insideArray.push(1);
            } else {
                const sum = resultArray[i-1][j-1] +  resultArray[i-1][j];
                insideArray.push(sum);
            }
        }
        resultArray.push(insideArray);
    }

    return resultArray;
};

console.log(generate(5));