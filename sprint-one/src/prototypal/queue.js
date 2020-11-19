var Queue = function() {
  var stackInstance = Object.create(queueMethods);
  stackInstance.storage = {};
  stackInstance.itemCount = 0;
  stackInstance.newestKey = 0;
  stackInstance.oldestKey = 1;
  return stackInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.itemCount++;
  this.newestKey++;
  this.storage[this.newestKey] = value;
};

queueMethods.dequeue = function() {
  if (this.itemCount > 0) {
    this.itemCount--;
    var dequeued = this.storage[this.oldestKey];
    delete this.storage[this.oldestKey];
    if (this.itemCount > 0) {
      this.oldestKey++;
    } else {
      this.oldestKey = 1;
      this.newestKey = 0;
    }
    return dequeued;
  }
};

queueMethods.size = function() {
  return this.itemCount;
};