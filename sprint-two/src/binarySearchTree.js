var BinarySearchTree = function(value) {
  var newBST = _.extend({}, bstMethods);
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;
  newBST.maxDepth = 1;
  return newBST;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  let depth = 1;
  if (value === this.value) {
    return null;
  }
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
      depth++;
    } else {
      depth += this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
      depth++;
    } else {
      depth += this.right.insert(value);
    }
  }
  if (depth > this.maxDepth) {
    this.maxDepth = depth;
  }
  return depth;
};

bstMethods.contains = function(value) {
  if (value === this.value) {
    return true;
  }
  if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
};

bstMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

//minDepth function

//resize function

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log n) if balanced, O(n) otherwise
 * contains: O(log n) if balanced, O(n) otherwise
 * depthFirstLog: O(n)
 */
