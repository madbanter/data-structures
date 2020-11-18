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
    var popped = storage[itemCount];
    delete storage[itemCount];
    itemCount--;
    return popped;
  };

  someInstance.size = function() {
    return Math.max(itemCount, 0);
  };

  return someInstance;
};
