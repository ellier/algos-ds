class ListNode {
  // ListNode constructor function
  constructor (item, prev, next) {
    this.item = item;
    this.next = next || null;
    this.prev = prev || null;
  }
}

class LinkedList {
  // LinkedList constructor function
  constructor () {
    this.item = null;
    this.head = this.tail = null;
  }

  // LinkedList.prototype.addToTail
  addToTail (item) {
    if (!this.head){
      const nodeInstance = new ListNode(item);
      this.head = this.tail = nodeInstance;
    } else {
        const nodeInstance = new ListNode(item);
        const formerTail = this.tail;
        this.tail = nodeInstance;
        formerTail.next = nodeInstance;
        nodeInstance.prev = formerTail;
    }
    return this; // for chaining, do not edit
  }

  // LinkedList.prototype.removeFromTail
  removeFromTail () {
    const formerTail = this.tail;
    if (!this.head){
      return undefined;
    } else if (!this.head.next){
        this.head = this.tail = null;
    } else {
        this.tail = formerTail.prev;
        this.tail.next = null;
    }
    return formerTail.item;
  }

  // LinkedList.prototype.forEach
  forEach (callbackFunc) {
    let currentNode = this.head;
    while (currentNode !== null){
      callbackFunc(currentNode.item);
      currentNode = currentNode.next;
    }
  }
}
