/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const sortedWithIndices = arr
      .map((value, index) => ({ value, index }))
      .sort((a, b) => a.value - b.value);

      console.log(sortedWithIndices);
  
    const ranks = new Array(arr.length);
    let rank = 0;
    let previousValue;
    sortedWithIndices.forEach((item) => {
      if(previousValue != item.value) rank++;
      ranks[item.index] = rank;
      previousValue = item.value;
    });
  
    return ranks;
}

console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]));