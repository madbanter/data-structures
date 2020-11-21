var Tree = function(value) {
  var newTree = _.extend({}, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // Create a tree with given value
  var child = Tree(value);
  // Push that tree to this.children
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (target === this.value) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1)
 contains: O(n)
 */
