// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
  if (!root) return true;
  let rightHeight = heightCheck(root.right);
  let leftHeight = heightCheck(root.left);
  if (Math.abs(rightHeight - leftHeight) > 1) {
    return false;
  } else {
    return (isBalanced(root.left) && isBalanced(root.right));
  }   
}

const heightCheck = root => {
  if (!root) return -1;

  return 1 + Math.max(heightCheck(root.left), heightCheck(root.right));
}