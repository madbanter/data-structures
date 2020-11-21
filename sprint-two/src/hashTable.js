

var HashTable = function(limit) {
  this._defaultLimit = 8;
  this._limit = limit || this._defaultLimit;
  this._storage = LimitedArray(this._limit);
  this._itemCount = 0;
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
    this._itemCount++;
    if (this._itemCount / this._limit >= 0.75) {
      this._storage = this.resize(this._limit * 2)._storage;
      this._limit *= 2;
    }
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
      this._itemCount--;
      if (this._limit / 2 >= 8 && this._itemCount / this._limit <= 0.25 ) {
        this._storage = this.resize(this._limit / 2)._storage;
        this._limit /= 2;
      }
      break;
    }
  }
};

HashTable.prototype.resize = function(newLimit) {
  var newHashTable = new HashTable(newLimit);
  this._storage.each(function(bucket) {
    if (bucket) {
      bucket.forEach(function(item) {
        newHashTable.insert(item[0], item[1]);
      });
    }
  });
  return newHashTable;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n) or O(1) with resizing
 * retrieve: O(n) or O(1) with resizing
 * remove: O(n) or O(1) with resizing
 */


