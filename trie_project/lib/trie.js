class Node {
  constructor(){
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor(){
    this.root = new Node();
  }

  insertRecur(word, root = this.root){
    if(word.length === 0) return;

    let letter = word[0];
    if(!(letter in root.children)){
      root.children[letter] = new Node();
    }

    if(word.length === 1){
      root.children[letter].isTerminal = true;
    }else{
      this.insertRecur(word.slice(1), root.children[letter]);
    }
  }

  insertIter(word, root = this.root){
    let q = word.split('');
    let currentRoot = root;
    while(q.length){
      let current = q.shift();
      
      if(!(current in currentRoot.children)) currentRoot.children[current] = new Node();
      currentRoot = currentRoot.children[current];
      if(!q.length){
        currentRoot.isTerminal = true;
        continue;
      }
    }
  }

  searchRecur(word, root = this.root){
    if(word.length === 0){
      if(root.isTerminal){
        return true;
      }else return false;
    }

    let letter = word[0];
    if (letter in root.children) {
      return this.searchRecur(word.slice(1), root.children[letter]);
    }else return false;
  }

  searchIter(word, root = this.root){
    let q = word.split('');
    let currentRoot = root;

    while(q.length){
      let current = q.shift();

      if (!(current in currentRoot.children)) return false;
      currentRoot = currentRoot.children[current];
    }

    if (currentRoot.isTerminal) {
      return true;
    } else return false;
  }

  wordsWithPrefix(word){
    let q = word.split('');
    let currentRoot = this.root;
    let prefix = word;
    let words = [];
    
    while(q.length){
      let current = q.shift();

      if (!(current in currentRoot.children)){
        if (q.length) {
          return [];
        } else {
          return [word];
        }
      }
      currentRoot = currentRoot.children[current];
    }

    for(let child in currentRoot.children){
      words = words.concat(this.deepRecur(currentRoot.children[child]));
    }

    return this.deepRecur(currentRoot).map(word =>{
      return prefix + word;
    });
  }

  deepRecur(node){
    if(Object.keys(node.children).length === 0) return [''];

    let words = [];
    if(node.isTerminal) words.push('');
    for(let child in node.children){
      words = words.concat(this.deepRecur(node.children[child]).map(word =>{
        return child + word;
      }));
    }

    return words;
  }
}

module.exports = {
    Node,
    Trie
};


function dijkstras(graph, source){
  let distance = {};
  debugger
  for (let node in graph){
    distance[node] = Infinity;
  }
  distance[source] = 0;

  let unvisited = new Set(Object.keys(graph));
  // let previous = {};

  while(unvisited.size > 0){
    let currentNode = getSmallestNode(unvisited, distance);
    unvisited.delete(currentNode);

    for(let neighbor in graph[currentNode]){
      let distanceToNeighbor = graph[currentNode][neighbor];
      let totalDistance = distanceToNeighbor + distance[currentNode];

      if(totalDistance < distance[neighbor]){
        distance[neighbor] = totalDistance;
        // previous[neighbor] = currentNode;
      }
    }
  }

  return distance;
}

function getSmallestNode(unvisited, distance){
  return Array.from(unvisited).reduce((minNode, node) =>{
    if(distance[node] < distance[minNode]){
      return node;
    }else {
      return minNode;
    }
  });
}

let graph = {
  'a': {'c': 1, 'b': 7},
  'b': {'a': 7, 'd': 12, 'e': 13},
  'c': {'a': 1, 'd': 20, 'f': 4},
  'd': {'b': 12, 'c': 20, 'e': 5},
  'e': {'b': 13, 'd': 5, 'f': 9},
  'f': {'c': 4, 'e': 9}
};






// ///////////////////////////////////////////////////

var seen = new Set();

function dfs(graph, start, result, temp) {
  if (start === Object.keys(graph).length) {
    result.push(temp.slice());
    return;
  }
  for (let j = 0; j < graph[start].length; j++) {
    let node = graph[start][j][0];
    if (seen.has(node))
      continue;

    seen.add(node);

    temp.push(node);
    dfs(graph, node, result, temp);
    seen.delete(node);
    temp.pop();
  }
}
let allPathsSourceTarget = function (graph) {
  const result = [];
  dfs(graph, 1, result, [1]);
  return result;
};

function makeGraph(inputEdges) {
  let graph = {};
  inputEdges.forEach(edge => {
    let [from, to, weight] = edge.split(' ');
    graph[from] = graph[from] || [];
    graph[to] = graph[to] || [];
    graph[from].push([parseInt(to), parseInt(weight)]);
    graph[to].push([parseInt(from), parseInt(weight)]);
  });
  return graph;
}

function getNodesOnShortestPaths(inputEdges) {
  let graph = makeGraph(inputEdges);
  let allPaths = allPathsSourceTarget(graph);

  let distances = allPaths.map(path => {
    let total = 0;
    for (let i = 0; i < path.length - 1; i++) {
      let start = path[i];
      let end = path[i + 1];
      let nodes = graph[start];
      node = nodes.filter(n => n[0] === end)[0];
      total += node[1];  //get distance to that node
    }
    return total;
  });
  let minDistance = Math.min(...distances);


  let filteredPaths = allPaths.filter(path => {
    let total = 0;
    for (let i = 0; i < path.length - 1; i++) {
      let start = path[i];
      let end = path[i + 1];
      let nodes = graph[start];
      node = nodes.filter(n => n[0] === end)[0];
      total += node[1];
    }
    return total === minDistance;
  });


  let shortestPathEdges = new Set();
  filteredPaths.forEach(path => {
    for (let i = 0; i < path.length - 1; i++) {
      let start = path[i];
      let end = path[i + 1];
      shortestPathEdges.add(JSON.stringify([start, end]));
      shortestPathEdges.add(JSON.stringify([end, start]));
    }
  });

  let final = [];
  inputEdges.forEach(edge => {
    let [from, to, weight] = edge.split(' ');
    let strEdge = `[${from},${to}]`;
    if (shortestPathEdges.has(strEdge)) {
      final.push('YES');
    } else {
      final.push('NO');
    }
  });
  return final;
}

let inputEdges = [
  '1 2 1',
  '2 3 1',
  '3 4 1',
  '4 5 1',
  '5 1 3',
  '1 3 2',
  '5 3 1'
];

let result = getNodesOnShortestPaths(inputEdges);
result

//////////////////////////////////////////
