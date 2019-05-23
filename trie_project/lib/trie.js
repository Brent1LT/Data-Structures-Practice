class Node {
  constructor(){
    this.children = {};
  }
}

class Trie {
  constructor(){
    this.root = new Node();
    
  }
}

module.exports = {
    Node,
    Trie
};