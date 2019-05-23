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

  wordsWithPrefix(word){
    let q = word.split('');
    let currentRoot = this.root;
    let prefix = word;
    let words = [];
    
    while(q.length){
      let current = q.shift();

      if (!(current in currentRoot.children)){
        if (q.length) {
          return [];
        } else {
          return [word];
        }
      }
      currentRoot = currentRoot.children[current];
    }

    for(let child in currentRoot.children){
      words = words.concat(this.deepRecur(currentRoot.children[child]));
    }

    return this.deepRecur(currentRoot).map(word =>{
      return prefix + word;
    });
  }

  deepRecur(node){
    if(Object.keys(node.children).length === 0) return [''];

    let words = [];
    if(node.isTerminal) words.push('');
    for(let child in node.children){
      words = words.concat(this.deepRecur(node.children[child]).map(word =>{
        return child + word;
      }));
    }

    return words;
  }
}

module.exports = {
    Node,
    Trie
};