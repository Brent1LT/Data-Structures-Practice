// ============================================================================
// Interview Problem: Linked List Intersection
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Write a function linkedListIntersection that returns the node at which the 
// intersection of two linked lists begins, or null if there is no such 
// intersection.
//
// ---------- 
// Example 1:
// ----------
// 
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1,list2) should return D 
// as the node of intersection.
// 
//    A → B → C
//             ↘
//               D → E → F
//             ↗
//        X → Y
//
// ---------- 
// Example 2:
// ----------
//
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1, list2) should return null 
// as there is no point of intersection.
// 
//    A → B → C → D
//
//    X → Y → Z
// 
// -----------
// Let's code!
// -----------

// O(n * m) solution
// function linkedListIntersection(list1, list2) {
//   // TODO: Implement the hasCycle function!
//   let checked = new Set();
//   let currentNode = list1.head;

//   while(currentNode !== null){
//     checked.add(currentNode.value);
//     currentNode = currentNode.next;
//   }

//   currentNode = list2.head;

//   while(currentNode !== null){
//     if(checked.has(currentNode.value)) return currentNode;
//     currentNode = currentNode.next;
//   }
  
//   return null;
// }

// O(n) solution
function linkedListIntersection(list1, list2){
  let checked = new Set();
  let currentNode1 = list1.head;
  let currentNode2 = list2.head;

  while(currentNode1 !== null && currentNode2 !== null){
    if(checked.has(currentNode1.value)) return currentNode1;
    if(checked.has(currentNode2.value)) return currentNode2;
    if(currentNode1.value === currentNode2.value) return currentNode1;

    checked.add(currentNode1.value);
    checked.add(currentNode2.value);

    currentNode1 = currentNode1.next;
    currentNode2 = currentNode2.next;
  }

  return null;
}

// ----------------------------------------
// Given: Singly Linked List - Do Not Edit!
// ----------------------------------------
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

// --------------------------------------
// Helper For Testing Only - Do Not Edit!
// --------------------------------------
var stringify = function(list) {
  var result = [];
  while(list !== null) {
    result.push(list.value);
    list = list.next;
  }
  return result.join("");
};

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.linkedListIntersection = linkedListIntersection;
exports.stringify = stringify;
