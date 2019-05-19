// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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

class Stack {
  constructor(){
    this.length = 0;
    this.top = null;
    this.bottom = null;
  }

  push(value){
    let node = new Node(value);
    node.next = this.top;
    if(this.size() === 0){
      [this.bottom, this.top] = [node, node];
    }else {
      this.top = node;
    }

    this.length++;
    return this.size();
  }

  pop(){
    if(this.size() === 0) return null;
    let removed = this.top;
    if(this.size() === 1) {
      [this.bottom, this.top] = [null, null];
    } else {
      this.top = removed.next;
    }
    this.length--;
    return removed.value;
  }

  size(){
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
