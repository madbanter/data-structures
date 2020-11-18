var Queue = function() {
  var queueInstance = {};
  queueInstance.itemCount = 0;
  queueInstance.oldestKey = 1;
  queueInstance.newestKey = 0;
  queueInstance.storage = {};
  _.extend(queueInstance, queueMethods);
  return queueInstance;
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