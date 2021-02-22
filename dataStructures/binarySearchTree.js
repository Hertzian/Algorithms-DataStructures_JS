class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  /**
   * Create a new node
   * Starting at the root
   * -Check if there is a root, if not, the root now becomes that new node!
   * -If there is a root, check if the value of the new node is greater than or less than the value of the root
   * -if it is greater:
   *  -Check to see if there is a node to the right
   *  -If there is, move to that node and repeat these steps
   *  -If there is not, add, that node as the right property
   * -If it is less
   *  -Check to see if there is a node to the left
   *  -If there is, move to that node and repeat these steps
   *  -If there is not, add that node as the left property
   */
  insert(value) {
    let newNode = new Node(value)

    if (this.root === null) {
      this.root = newNode
      return this
    }

    let current = this.root

    while (true) {
      if (value === current.value) {
        return undefined
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode
          return this
        }

        current = current.left
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode
          return this
        }

        current = current.right
      }
    }
  }

  insert2(value) {
    let newNode = new Node(value)

    if (this.root === null) {
      this.root = newNode
      return this
    }

    let current = this.root

    while (true) {
      if (value === current.value) {
        return undefined
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode
          return this
        }

        current = current.left
      }

      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode
          return this
        }

        current = current.right
      }
    }
  }

  /**
   * Starting at the root
   * -Check if there is a root, if not, we're done searching!
   * -If there is a root, check if the value of the new node is the value we are looking for
   *  -If we found it, we're done!
   * -If not, check to see if the value is greater than or less than the value of the root
   * -If it is greater
   *  -Check to see if there is a node to the right
   *    -If there is, move to that node and repeat these steps
   *    -If there is not, we're done searching!
   * -If it is less
   *  -Check to see if there is a node to the left
   *    -If there is, move to that node and repeat these steps
   *    -If there is not, we're done searching!
   */
  search(value) {
    if (this.root === null) {
      return false
    }

    let current = this.root,
      found = false

    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }

    if (!found) {
      return undefined
    }

    return false
  }

  contains(value) {
    if (this.root === null) {
      return false
    }

    let current = this.root,
      found = false

    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return true
      }
    }

    return false
  }

  /**
   * Create a queue (this can be an array) and a variable to store the values of nodes visited
   * Place the rrot node in the queue
   * Loop as long as there is anything in the queue
   *  -Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
   *  -If there is a left property on the node dequeued - add it to the queue
   *  -If there is a right property on the node dequeued - add it to the queue
   * Return the variable that stores the values
   */
  breadthFirstSearch(){
    let data = [],
      queue = [],
      node = this.root

    queue.push(node)

    while(queue.length) {
      node = queue.shift()
      data.push(node.value)

      if(node.left) { 
        queue.push(node.left)
      }

      if(node.right) {
        queue.push(node.right)
      }

      return data
    }
  }
}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
