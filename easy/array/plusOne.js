/**
 * https://leetcode.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let size = digits.length;
    
    while (size > 0) {
        digits[size - 1] += 1;
        
        if (digits[size - 1] < 10) {
            return digits;
        } else {
            digits[size - 1] = 0
        }
        size--;
    }
    
    // here if first digit is 0 currently
    digits.unshift(1)
    return digits;
};
