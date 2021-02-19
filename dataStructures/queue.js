class Node {
  constructor(val) {
    this.value = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  /**
   * This function accepts some value
   * Create a new node using that value passed to the function
   * If there are no nodes in the queue, set this node to be the first and las property of the queue
   */
  enqueue(val) {
    let newNode = new Node(val)

    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    this.size++

    return this.size
  }

  /**
   * If there is no first property, just return null
   * Store the first property in a variable
   * See if the first is the same as the last (check if there is only one node), if so, set the firts and last to be null
   * If there is more than one node, set the first property to be the next property of first
   * Decrement the size by one
   * Return the value of the node dequeued
   */
  dequeue() {
    if (!this.first) {
      return null
    }

    let temp = this.first

    if(this.first === this.last) {
      this.last = null
    }

    this.first = this.first.next
    this.size--
  
    return temp.value
  }
}
