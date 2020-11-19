var Stack = function() {
  var stackInstance = Object.create(stackMethods);
  stackInstance.itemCount = 0;
  stackInstance.storage = {};
  return stackInstance;
};

var stackMethods = {};

stackMethods.push = function(item) {
  this.itemCount++;
  this.storage[this.itemCount] = item;
};

stackMethods.pop = function() {
  if (this.itemCount > 0) {
    var popped = this.storage[this.itemCount];
    delete this.storage[this.itemCount];
    this.itemCount--;
    return popped;
  }
};

stackMethods.size = function() {
  return this.itemCount;
};