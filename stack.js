class Stack {
  // Stack constructor function
  constructor () {
    this.stackArr = [];
    this.head = 0;
    this.tail = 0;
  }

  // Stack.prototype.add
  add (item) {
    this.stackArr[this.tail] = item;
    this.tail++;
    return this; // for chaining, do not edit
  }

  // Stack.prototype.remove
  remove () {
    if (this.head === this.tail){
      return undefined;
    } else {
        this.tail--;
        return this.stackArr[this.tail];
    }
  }
}
