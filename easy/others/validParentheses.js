/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    
    const stack = []
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            // openning
            stack.push(s[i])
        } else {
            // closing
            const value = stack.pop()
            // check if corresponding value of closing matches current value
            if (map[value] !== s[i]) {
                return false;
            }
        }
    }
    
    return stack.length === 0
};
