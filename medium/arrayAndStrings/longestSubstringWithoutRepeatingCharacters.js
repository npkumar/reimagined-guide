/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let sp = 0
    let fp = 0
    let max = 0
    const set = new Set()
    
    while (fp < s.length) {
        if (!set.has(s[fp])) {
            set.add(s[fp])
            fp++
            max = Math.max(max, set.size)
        } else {
            set.delete(s[sp])
            sp++
        }
    }
    
    return max
};
