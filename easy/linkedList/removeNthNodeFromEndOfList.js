/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // to keep track of head
    let temp = new ListNode()
    temp.next = head;
    let fp = temp;
    let sp = temp;
    
    // fp to be n steps ahead (+1 since we start from temp)
    for (let i = 0; i < n + 1; i++) { fp = fp.next }
    
    // move sp till fp reaches end
    while (fp !== null) {
        fp = fp.next;
        sp = sp.next;
    }
    
    // remove node
    sp.next = sp.next.next;
    
    // return head
    return temp.next
};
