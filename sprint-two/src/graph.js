

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    for (let i = 0; i < this.edges[node].length; i++) {
      let removeIndex = this.edges[this.edges[node][i]].indexOf(node);
      this.edges[this.edges[node][i]].splice(removeIndex, 1);
    }
    delete this.edges[node];
    let nodeIndex = this.nodes.indexOf(node);
    this.nodes.splice(nodeIndex, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode) && !this.hasEdge(fromNode, toNode)) {
    this.edges[toNode].push(fromNode);
    this.edges[fromNode].push(toNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    let toIndex = this.edges[fromNode].indexOf(toNode);
    this.edges[fromNode].splice(toIndex, 1);
    let fromIndex = this.edges[toNode].indexOf(fromNode);
    this.edges[toNode].splice(fromIndex, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1)
 * contains: O(n)
 * removeNode: O(n^2)
 * hasEdge: O(n)
 * addEdge: O(n)
 * removeEdge: O(n)
 * forEachNode: O(n)
 */
//shouldnt do anything if we call addEdge on nodes not in graph
//test for removeNode called on node which does not exist in graph

