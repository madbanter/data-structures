

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  var array = this._storage.get(index);
  var found = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === k) {
      array[i][1] = v;
      found = true;
      break;
    }
  }
  if (!found) {
    array.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(index) || [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === k) {
      return array[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(index);
  if (array === undefined) {
    return undefined;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === k) {
      array.splice(i, 1);
      break;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n) *until we implement resizing*
 * retrieve: O(n) *until we implement resizing*
 * remove: O(n) *until we implement resizing*
 */


