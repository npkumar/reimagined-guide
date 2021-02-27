/**
 * https://leetcode.com/problems/palindrome-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null) return true
    
    let cur = head
    let org =  ''
    let rev = ''
    
    while (cur !== null) {
        org = org + cur.val
        rev = cur.val + rev
        cur = cur.next;
    }
    
    return org === rev
};
