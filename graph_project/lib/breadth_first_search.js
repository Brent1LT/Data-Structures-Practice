function breadthFirstSearch(startingNode, targetVal) {
  if(!startingNode) return null;
  let q = [startingNode];
  let visited = new Set();
  while(q.length){
    let current = q.shift();
    if(current.val === targetVal) return current;
    visited.add(current);
    current.neighbors.forEach(node => {
      if(!visited.has(node)) q.push(node);
    });
  }

  return null;
}

module.exports = {
    breadthFirstSearch
};