class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


class BST {
  constructor(){
    this.root = null;
  }

  insert(val, root = this.root){

    if(!root){
      this.root = new TreeNode(val);
      return;
    }
    if(val < root.val){
      if(!root.left){
        root.left = new TreeNode(val);
      }else{
        this.insert(val, root.left);
      }
    }else {
      if(!root.right){
        root.right = new TreeNode(val);
      }else{
        this.insert(val, root.right);
      }
    }
  }

  searchRecur(val, root = this.root){
    if(!root) return false;
    if(root.val === val) return true;

    if(val < root.val){
      return this.searchRecur(val, root.left);
    }else{
      return this.searchRecur(val, root.right);
    }
  }

  searchIter(val, root = this.root){
    if(!root) return false;
    let q = [root];
    while(q.length){
      let current = q.shift();
      if(current.val === val) return true;
      if (val < current.val && current.left){
        q.push(current.left);
      }else if(current.right){
        q.push(current.right);
      }
    }
    return false;
  }
}

module.exports = {
    TreeNode,
    BST
};