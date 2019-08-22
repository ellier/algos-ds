class Queue {
  // Queue constructor function
  constructor () {
    this.queueArr = [];
    this.head = 0;
    this.tail = 0;
  }

  // Queue.prototype.add
  add (item) {
    this.queueArr[this.tail] = item;
    this.tail++;
    return this; // for chaining, do not edit
  }

  // Queue.prototype.remove
  remove () {
    if (this.head === this.tail){
      return undefined;
    } else {
      const formerHead = this.queueArr[this.head];
      this.head++;
      return formerHead;
    }
  }
}
