/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = {}
    let min = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] >= -1) {
            map[s[i]] = -1
        } else {
            map[s[i]] = i
        }
    }
    
    for (let key of Object.keys(map)) {
        if (map[key] < min && map[key] > -1) {
            min = map[key]
        }
    }
    
    return min === Number.MAX_SAFE_INTEGER ? -1 : min;
};
