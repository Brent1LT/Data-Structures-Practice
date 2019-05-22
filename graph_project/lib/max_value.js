function maxValue(node, visited=new Set()) {
  if(!node) return 0;
  if (visited.has(node.val)) return;

  visited.add(node.val);
  node.neighbors.forEach(child => {
    maxValue(child, visited);
  });
  return Math.max(...visited.values());
}

module.exports = {
    maxValue
};