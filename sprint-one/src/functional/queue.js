var Queue = function() {
  var someInstance = {};
  var itemCount = 0;
  var newestKey = 0;
  var oldestKey = 1;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    itemCount++;
    newestKey++;
    storage[newestKey] = value;
  };

  someInstance.dequeue = function() {
    if (itemCount > 0) {
      itemCount--;
      var dequeued = storage[oldestKey];
      delete storage[oldestKey];
      if (itemCount > 0) {
        oldestKey++;
      } else {
        oldestKey = 1;
        newestKey = 0;
      }
      return dequeued;
    }
  };

  someInstance.size = function() {
    return itemCount;
  };

  return someInstance;
};
