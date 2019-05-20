function treeSum(root) {
  if(!root) return 0;
  let q = [];
  let result = 0;
  q.push(root);

  while(q.length){
    let current = q.shift();
    if(current.left) q.push(current.left);
    if(current.right) q.push(current.right);

    result += current.val;
  }

  return result;
}


module.exports = {
  treeSum
};