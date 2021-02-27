/**
 * https://leetcode.com/problems/reverse-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let cur = head
    
    while (cur !== null) {
        let temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }
    
    // this will be head
    return prev
};
