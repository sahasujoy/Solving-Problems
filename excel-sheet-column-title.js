/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let charValues = []
    while (columnNumber > 0) {
        columnNumber--;
        charValues.push(columnNumber % 26);
        columnNumber = Math.floor(columnNumber / 26); 
    }

    console.log(charValues);

    let columnTitle = "";
    for (let i = charValues.length - 1; i >= 0; i--) {
        columnTitle += String.fromCharCode(charValues[i] + 65);
    }

    return columnTitle;
};

console.log(convertToTitle(27));

console.log(Math.floor(701 / 26));