class Node {
  constructor(){
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor(){
    this.root = new Node();
  }

  insertRecur(word, root = this.root){
    if(word.length === 0) return;

    let letter = word[0];
    if(!(letter in root.children)){
      root.children[letter] = new Node();
    }

    if(word.length === 1){
      root.children[letter].isTerminal = true;
    }else{
      this.insertRecur(word.slice(1), root.children[letter]);
    }
  }

  insertIter(word, root = this.root){
    let q = word.split('');
    let currentRoot = root;
    while(q.length){
      let current = q.shift();
      
      if(!(current in currentRoot.children)) currentRoot.children[current] = new Node();
      currentRoot = currentRoot.children[current];
      if(!q.length){
        currentRoot.isTerminal = true;
        continue;
      }
    }
  }

  searchRecur(word, root = this.root){
    if(word.length === 0){
      if(root.isTerminal){
        return true;
      }else return false;
    }

    let letter = word[0];
    if (letter in root.children) {
      return this.searchRecur(word.slice(1), root.children[letter]);
    }else return false;
  }

  searchIter(word, root = this.root){
    let q = word.split('');
    let currentRoot = root;

    while(q.length){
      let current = q.shift();

      if (!(current in currentRoot.children)) return false;
      currentRoot = currentRoot.children[current];
    }

    if (currentRoot.isTerminal) {
      return true;
    } else return false;
  }
}

module.exports = {
    Node,
    Trie
};