/**
 * https://leetcode.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = ''
    if (strs.length === 0) return prefix;
    
    // first word
    const target = strs[0]
    
    for (let i = 0; i < target.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            const compare = strs[j]
            
            if (target[i] !== compare[i]) {
                return prefix;
            }
        }
        
        // checked all remaining words, so append
        prefix += target[i]
    }
    return prefix;
};
