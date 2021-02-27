/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let temp = new ListNode()
    let start = temp;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            temp.next = new ListNode(l1.val)
            l1 = l1.next;
        } else {
            temp.next = new ListNode(l2.val)
            l2 = l2.next;
        }
        
        temp = temp.next;
    }
    
    // Just link what's remaining
    if (l1 !== null) temp.next = l1
    if (l2 !== null) temp.next = l2
    
    // this will be head aka first item
    return start.next;
};
