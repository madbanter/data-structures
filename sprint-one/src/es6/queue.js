class Queue {
  constructor() {
    this.storage = {};
    this.itemCount = 0;
    this.newestKey = 0;
    this.oldestKey = 1;
  }

  enqueue(value) {
    this.itemCount++;
    this.newestKey++;
    this.storage[this.newestKey] = value;
  }

  dequeue() {
    if (this.itemCount > 0) {
      let dequeued = this.storage[this.oldestKey];
      delete this.storage[this.oldestKey];
      this.oldestKey++;
      if (this.itemCount > 0) {
        this.itemCount--;
      }
      return dequeued;
    }

  }

  size() {
    return this.itemCount;
  }
}
