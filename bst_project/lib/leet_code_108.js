// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
  if (nums.length === 0) return null;

  let middle = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[middle]);

  root.right = sortedArrayToBST(nums.slice(middle + 1));
  root.left = sortedArrayToBST(nums.slice(0, middle));

  return root;
}