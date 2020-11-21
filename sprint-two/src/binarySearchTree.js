var BinarySearchTree = function(value) {
  var newBST = _.extend({}, bstMethods);
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;
  return newBST;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  if (value === this.value) {
    return null;
  }
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
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


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log n) if balanced, O(n) otherwise
 * contains: O(log n) if balanced, O(n) otherwise
 * depthFirstLog: O(log n) if balanced, O(n) otherwise
 */
