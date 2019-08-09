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
  constructor(val) {
    this.value = val;
    this.next = null;
  }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    let node = new Node(val);
    if (this.size() === 0) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.tail;
      this.tail = node;
      temp.next = this.tail;
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    if (this.size() === 0) return undefined;

    let removed = this.tail;
    if (this.size() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      let counter = 1;
      while (counter < this.size() - 1) {
        counter += 1;
        current = current.next;
      }
      this.tail = current;
      current.next = null;
    }

    this.length--;
    return removed;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    let node = new Node(val);

    if (this.size() === 0) {
      [this.head, this.tail] = [node, node];
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if (this.size() === 0) return undefined;

    let temp = this.head;
    if (this.size() === 1) {
      [this.head, this.tail] = [null, null];
    } else {
      this.head = temp.next;
    }
    this.length--;
    return temp;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let current = this.head;
    while (current !== null) {
      if (current.value === target) return true;
      current = current.next;
    }

    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    if (index > this.size() - 1) return null;
    let current = this.head;
    let idx = 0;
    while (idx < index) {
      current = current.next;
      idx++;
    }

    return current;
  }

  // TODO: Implement the set method here
  set(index, val) {
    let node = this.get(index);
    if (node === null) return false;
    node.value = val;
    return true;
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index > this.size() - 1) return false;
    let node = new Node(val);
    let current = this.get(index - 1);

    let temp = current.next;
    current.next = node;
    node.next = temp;
    this.length++;

    return true;
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index > this.size() - 1) return undefined;

    let current = this.get(index - 1);
    let removed = current.next;
    current.next = removed.next;
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
