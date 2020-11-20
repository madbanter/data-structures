var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (list.tail) {
      list.tail.next = newNode;
      list.tail = newNode;
    } else {
      list.tail = newNode;
      list.head = newNode;
    }
  };

  list.removeHead = function() {
    if (list.tail) {
      var oldHead = list.head;
      list.head = list.head.next;
      //return current head
      return oldHead.value;
    }
  };

  list.contains = function(target) {
    var cursor = list.head;
    while (cursor) {
      if (cursor.value === target) {
        return true;
      }
      cursor = cursor.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1)
 * removeHead: O(1)
 * contains: O(n)
 */
//add test to check for empty list