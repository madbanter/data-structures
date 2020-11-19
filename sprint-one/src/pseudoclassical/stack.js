var Stack = function() {
  this.storage = {};
  this.itemCount = 0;
};

Stack.prototype.push = function(item) {
  this.itemCount++;
  this.storage[this.itemCount] = item;
};

Stack.prototype.pop = function() {
  if (this.itemCount > 0) {
    var popped = this.storage[this.itemCount];
    delete this.storage[this.itemCount];
    this.itemCount--;
    return popped;
  }
};

Stack.prototype.size = function() {
  return this.itemCount;
};