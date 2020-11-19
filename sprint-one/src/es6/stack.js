class Stack {
  constructor() {
    this.itemCount = 0;
    this.storage = {};
  }

  push(item) {
    this.itemCount++;
    this.storage[this.itemCount] = item;
  }

  pop() {
    if (this.itemCount > 0) {
      let popped = this.storage[this.itemCount];
      delete this.storage[this.itemCount];
      this.itemCount--;
      return popped;
    }
  }

  size() {
    return this.itemCount++;
  }
}