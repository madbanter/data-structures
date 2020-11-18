var Stack = function() {
  var someInstance = {};
  var itemCount = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    itemCount++;
    storage[itemCount] = value;
  };

  someInstance.pop = function() {
    if (itemCount > 0) {
      var popped = storage[itemCount];
      delete storage[itemCount];
      itemCount--;
      return popped;
    }
  };

  someInstance.size = function() {
    return itemCount;
  };

  return someInstance;
};
