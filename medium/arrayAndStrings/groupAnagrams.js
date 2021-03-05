/**
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};
  for (let s of strs) {
    const sorted = s.split('').sort().join('');
    if(map[sorted]) {
      map[sorted].push(s);
    } else {
      map[sorted] = [s];
    }
  }
  return Object.values(map);
};
