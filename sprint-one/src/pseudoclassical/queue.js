var Queue = function() {
  this.storage = {};
  this.itemCount = 0;
  this.newestKey = 0;
  this.oldestKey = 1;
};

Queue.prototype.enqueue = function(value) {
  this.itemCount++;
  this.newestKey++;
  this.storage[this.newestKey] = value;
};

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
  return this.itemCount;
};