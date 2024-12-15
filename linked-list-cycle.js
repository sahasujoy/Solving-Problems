/**
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
    if (!head || !head.next) {
        return false;
    }
    
    let hare = head;
    let tortoise = head;

    while (hare && hare.next) {
        hare = hare.next.next;
        tortoise = tortoise.next;
        
        if (hare === tortoise) {
            return true;
        }
    }
    
    return false;
};

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

console.log(hasCycle(list));