// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // TODO: Implement the addToTail method here
  addToTail(value) {
    if(!this.length){
      let node = new Node(value);
      this.head = node;
      this.tail = node;
    }else{
      let temp = this.tail;
      let node = new Node(value);
      this.tail = node;
      temp.next = node;
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    let removed = this.tail;
    if(!this.size()) return undefined;
    if(this.size() === 1){
      this.head = null;
      this.tail = null;
    }else{
      let currentNode = this.head;
      while(currentNode.next !== this.tail){
        currentNode = currentNode.next;
      }
      this.tail = currentNode;
      this.tail.next = null;
    }
    this.length--;
    return removed;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    let node = new Node(val);
    if(!this.size()){
      // this.head = node;
      // this.tail = node;
      [this.head, this.tail] = [node, node];
    }else{
      let temp = this.head;
      this.head = node;
      this.head.next = temp;
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if(!this.size()) return undefined;
    let removed = this.head;
    if(this.size() === 1){
      [this.head, this.tail] = [null, null];
    } else {
      this.head = removed.next;
    }
    this.length --;
    return removed;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let currentNode = this.head;
    let contained = false;
    while(currentNode !== null){
      if(target === currentNode.value) contained = true;
      currentNode = currentNode.next;
    }
    return contained;
  }

  // TODO: Implement the get method here
  get(index) {
    if(index > this.size() - 1) return null;
    let currentIndex = 0;
    let currentNode = this.head;
    while(currentIndex !== index){
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  // TODO: Implement the set method here
  set(index, val) {
    if (index > this.size() - 1) return false;
    let node = this.get(index);
    node.value = val;
    return true;
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index > this.size() - 1) return false;

    let prevNode;
    if(!index) {
      prevNode = this.get(0);
    } else {
      prevNode = this.get(index - 1);
    }

    let nextNode = prevNode.next;
    let node = new Node(val);
    [prevNode.next, node.next] = [node, nextNode];
    this.length++;
    return true;
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index > this.size() - 1) return undefined;
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
