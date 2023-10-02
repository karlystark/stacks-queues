/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}
//linked list!
/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    if(this.first === null) this.first = newNode;

    if(this.last !== null) this.last.next = newNode;

    this.last = newNode;

    this.size++;

    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.size === 0){
      throw new Error;
    } else if (this.first === this.last){
      let res = this.first.val;
      this.first = null;
      this.last = null;
      this.size--;
      return res;
    } else {
      let res = this.first.val;
      this.first = this.first.next;
      this.size--;
      return res;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0? true : false;
  }
}

module.exports = Queue;