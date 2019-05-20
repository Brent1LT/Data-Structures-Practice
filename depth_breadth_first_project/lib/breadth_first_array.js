function breadthFirstArray(root) {
  let q = [];
  let result = [];
  q.push(root);

  while(q.length){
    let current = q.shift();
    result.push(current.val);
    if(current.left) q.push(current.left);
    if(current.right) q.push(current.right);
  }
  return result;
}

module.exports = {
    breadthFirstArray
};