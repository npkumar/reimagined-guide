/**
 * https://leetcode.com/problems/linked-list-cycle/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head == null) return false;

    let sp = head;
    let fp = head.next;
    
    while (sp !== fp) {
        if (fp === null || fp.next === null) {
            return false;
        }
        
        sp = sp.next;
        fp = fp.next.next;
    }
    
    return true;
};
