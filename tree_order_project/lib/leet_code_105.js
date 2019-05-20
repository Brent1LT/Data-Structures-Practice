// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
  if (preorder.length === 0) return null;

  let root = preorder[0];
  let rootNode = new TreeNode(root);

  let midIndex = inorder.indexOf(root);
  let leftInorder = inorder.slice(0, midIndex);
  let rightInorder = inorder.slice(midIndex + 1);

  let leftPreorder = preorder.filter(el => leftInorder.includes(el));
  let rightPreorder = preorder.filter(el => rightInorder.includes(el));

  rootNode.left = buildTree(leftPreorder, leftInorder);
  rootNode.right = buildTree(rightPreorder, rightInorder);

  return rootNode;
}
