/**
 * https://leetcode.com/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index = nums1.length - 1; // last index
    
    // point to last indexes
    m--;
    n--;
    
    while (index >= 0) {
        if (n < 0) {
            // only left remains
            nums1[index] = nums1[m]
            m--
        } else if (m < 0) {
            // only right remains
            nums1[index] = nums2[n]
            n--
        } else {
            if (nums1[m] > nums2[n]) {
                nums1[index] = nums1[m]
                m--
            } else {
                nums1[index] = nums2[n]
                n--
            }
        }
        index--;
    }
};
