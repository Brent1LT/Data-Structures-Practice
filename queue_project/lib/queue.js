// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.length = 0;
    this.front = null;
    this.back = null;
  }

  size(){
    return this.length;
  }

  enqueue(val){
    let node = new Node(val);
    if(this.size() === 0){
      [this.front, this.back] = [node, node];
    }else {
      this.back.next = node;
      this.back = node;
    }
    this.length++;
    return this.size();
  }

  dequeue(){
    if(this.size() === 0) return null;
    let removed = this.front;
    if(this.size() === 1){
      [this.front, this.back] = [null, null];
    }else {
      this.front = removed.next;
    }
    this.length--;
    return removed.value;
  }
}

exports.Node = Node;
exports.Queue = Queue;