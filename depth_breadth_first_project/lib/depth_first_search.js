function depthFirstSearch(root, targetVal) {
  if(!root) return null;
  if(root.val === targetVal) return root;

  let left = depthFirstSearch(root.left, targetVal);
  let right = depthFirstSearch(root.right, targetVal);

  if(left){
    return left;
  } else{
    return right;
  }
  
}


module.exports = {
    depthFirstSearch
};