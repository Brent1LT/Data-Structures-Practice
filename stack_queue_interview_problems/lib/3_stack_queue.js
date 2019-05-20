// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
  // TODO: Implement the Node class!
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

class Stack {
  // TODO: Implement the Stack class!
  constructor(){
    this.length = 0;
    this.top = null;
    this.bottom = null;
  }

  push(item){
    let node = new Node(item.value);
    if(!this.top){
      [this.top, this.bottom] = [node, node];
    }else{
      let temp = this.top;
      node.next = temp;
      this.top = node;
    }

    this.length++;
    return this.size();
  }

  pop(){
    if(!this.size()) return null;
    let removed = this.top;
    if(this.size() === 1){
      this.top = null;
      this.bottom = null;
    }
    this.top = removed.next;
    this.length--;
    return removed;
  }

  size(){
    return this.length;
  }

  emptyInto(stack){
    while(this.size()){
      let item = this.pop();
      stack.push(item);
    }
  }
}

class StackQueue {
  // TODO: Implement the StackQueue class!
  constructor(){
    this.inStack = new Stack();
    this.outStack = new Stack();
    this.length = 0;
    this.front = null;
    this.back = null;
  }

  enqueue(val){
    let item = new Node(val);
    this.inStack.push(item);
    if(!this.size()){
      this.front = item;
      this.back = item;
    }else {
      this.back.next = item;
      this.back = item;
  }
    this.length++;
    return this.size();
  }

  dequeue(){
    if(this.size() === 0) return null;
    if(this.outStack.size() === 0){
      this.inStack.emptyInto(this.outStack);
    }

    let removed = this.outStack.pop();
    this.length--;
    if(this.size() === 0){
      this.front = null;
      this.back = null;
    }else{
      this.front = this.outStack.top;
      this.back = this.outStack.bottom;
    }

    return removed;
  }

  size(){
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
