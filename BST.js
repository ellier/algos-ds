/* eslint-disable complexity */
class BinarySearchTree {
  constructor (value){
      this.value = value;
      this.sizeVal = 1;
      this.left = null;
      this.right = null;
  }
  insert(newNodeVal){
      this.sizeVal++;
      if (newNodeVal < this.value){
          if (this.left){
              this.left.insert(newNodeVal);
          } else {
              this.left = new BinarySearchTree(newNodeVal);
          }
      } else if (this.right){
              this.right.insert(newNodeVal);
      } else {
              this.right = new BinarySearchTree(newNodeVal);
      }
  }
  contains(value){
      if (value === this.value){
          return true;
      } else if (value < this.value){
          if (this.left){
              return this.left.contains(value);
          }
      } else if (value > this.value){
          if (this.right){
              return this.right.contains(value);
          }
      }
      return false;
  }
  depthFirstForEach(callback, option = 'in-order'){
      if (option === 'pre-order'){
          callback(this.value);
          if (this.left){
              this.left.depthFirstForEach(callback, option);
          }
          if (this.right) {
              this.right.depthFirstForEach(callback, option);
          }
      }
      if (option === 'in-order'){
          if (this.left){
              this.left.depthFirstForEach(callback, option);
          }
          callback(this.value);
          if (this.right){
              this.right.depthFirstForEach(callback, option);
          }
      }
      if (option === 'post-order'){
          if (this.left){
              this.left.depthFirstForEach(callback, option);
          }
          if (this.right) {
              this.right.depthFirstForEach(callback, option);
          }
          callback(this.value);
      }
  }
  breadthFirstForEach(callback){
      const queue = [this];
      while (queue.length){
          let current = queue.shift();
          if (current.left) queue.push(current.left);
          if (current.right) queue.push(current.right);
          callback(current.value);
      }
  }
  size(){
      return this.sizeVal;
  }
}
