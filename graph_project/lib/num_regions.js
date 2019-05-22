function numRegions(graph) {
  let visited = new Set();
  let regions = 0;
  Object.keys(graph).forEach(node => {
    if(!visited.has(node)){
      regions += 1;
      addRegion(graph, node, visited);
    }
  });
  
  return regions;
}

function addRegion(graph, node, visited){
  let stack = [node];

  while(stack.length){
    let current = stack.pop();
    if(visited.has(current)) continue;
    
    visited.add(current);
    stack.push(...graph[current]);
  }
}

module.exports = {
    numRegions
};