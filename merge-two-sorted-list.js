/**
 * Definition for singly-linked list.
 * @param {number} val
 * @param {ListNode|null} next
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to simplify the merging process
    let dummy = new ListNode(0);
    let current = dummy; // Pointer to build the new list

    // Traverse both lists
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1; // Link to the smaller node
            list1 = list1.next;    // Move to the next node in list1
        } else {
            current.next = list2; // Link to the smaller node
            list2 = list2.next;    // Move to the next node in list2
        }
        current = current.next; // Move to the next position in the merged list
    }

    // If one of the lists is not exhausted, append it to the merged list
    if (list1 !== null) {
        current.next = list1; // Append the rest of list1
    } else {
        current.next = list2; // Append the rest of list2
    }

    // Return the merged list, starting from the next node of dummy
    return dummy.next;
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next; // Return the head of the linked list
}

// Example usage
const list1 = createLinkedList([1, 2, 4]);
const list2 = createLinkedList([1, 3, 4]);
const mergedList = mergeTwoLists(list1, list2);

// Function to print the linked list
function printLinkedList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.val + ",");
        current = current.next;
    }
    console.log("null");
}

printLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> null