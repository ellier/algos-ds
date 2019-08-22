// Hash function and Hashtable, collisions handled with singly-linked list

class CollisionNode {
  constructor(key, value) {
    this[key] = value;
    this.next = null;
  }
}

// The list class will take a node as an argument to start the chain
class CollisionList {
  constructor(node) {
    this.head = node;
    this.count = 0;
  }
}

class HashTable {
  constructor(limit) {
    this.storage = [];
    this.limit = limit || 50; // To avoid collisions more, make this a large prime number
    this.count = 0;
  }

  // The hashing function uses string charcode values to create a unique hash. This is why primary keys being unique are important
  hashFn(string, limit = this.limit) {
    let hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    // this value returned is often called hash code or digest
    return hash % limit;
  }

  // insert is the simplest function and will always create a new bucket with a collisionlist or add a node to a collisionlist unless a JS error occurs
  insert(key, value) {
    let index = this.hashFn(key);
    let bucket = this.storage[index];
    let item = new CollisionNode(key, value);

    // Create a new bucket if none exist
    if (!bucket) {
      bucket = new CollisionList(item);
      this.storage[index] = bucket;
      bucket.count++;  // count here refers to linked list count; pass by reference
      this.count++; // count here refers to hashtable's count

      return 'New bucket created';
    }
    else {
      let current = bucket.head;

      // If the head has null next it is there is only one node in the collisionlist
      if (!current.next) {
        current.next = item;
      }
      else {
        // move to the end of the collisionlist
        while (current.next) {
          current = current.next;
        }

        current.next = item;
      }
      bucket.count++;
      this.count++;

      return 'New item placed in bucket at position ' + bucket.count;
    }
  }

  retrieve(key, i) {
    let pos = i || null;
    let index = this.hashFn(key);
    let bucket = this.storage[index];

    if (!bucket) {
      return 'Item not found';
    }

    if (pos > bucket.count) {
      return 'Retrieval position is greater than bucket length';
    }

    if (!i || i === 1) {
      return bucket.head[key]; // Return the value only, can be modified
    }

    let listIterator = 1;
    let current = bucket.head;

    while (listIterator < pos) {
      current = current.next;
      listIterator++;
    }

    return current[key];
  }
}
