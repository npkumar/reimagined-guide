/**
 * https://leetcode.com/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = []
    
    for (let i = 0; i < numRows; i++) {
        const temp = []
        // first index
        temp[0] = 1
        
        // last index
        temp[i] = 1
        
        // skip first and last since its 1
        for (let j = 1; j < i; j++) {
            const lastRow = result[i - 1]
            // sum of prev and next value
            temp[j] = lastRow[j - 1] + lastRow[j]
        }
        
        result.push(temp)
    }
    return result;
};
