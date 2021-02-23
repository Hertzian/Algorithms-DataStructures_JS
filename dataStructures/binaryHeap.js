/**
 *
 */
class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  /**
   * Push the value into the values property on the heap
   * Bubble up:
   *  -Create a variable called index which is the length of the values property -1
   *  -Create a variable called parentIndex which is the floor of (index - 1) / 2
   *  -Keep looping as long as the values element at the parentIndex is less than the values element at the child index
   *    -Swap the value of the values element at the parentIndex with the value of the element property at the child index
   *    -Set the index to be the parentIndex, and start over!
   */
  insert(element) {
    this.values.push(element)
    this.bubbleUp()
  }

  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]

    // while (true) {
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]

      // if (element > parent) {
      //   this.values[parentIdx] = element
      //   this.values[idx] = parent
      //   idx = parentIdx
      // }

      if (element <= parent) {
        break
      }

      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }

  /**
   * Swap the first value in the values property with the last one
   * Pop from the values property, so you can return the value at the end
   * Have the new root 'sink down' to the correct spot...
   *  -Your parent index starts at 0 (the root)
   *  -Find the index of the left child: 2 * index + 1 ( make sure its not out of bounds)
   *  -Find the index of the right child: 2 * index + 1 ( make sure its not out of bounds)
   *  -If the left or right child is greater than the element ... swap. If both left and right children are larger, swap with the largest child
   *  -The child index you swapped to now becomes the new parent index
   *  -Keep looping and swapping until neither child is larger than the element
   *  -Return the old root!
   */
  extractMax() {
    // edge case come back to this
    const max = this.values[0]
    const end = this.values.pop()

    if(this.values.length > 0) {
      this.values[0] = end
      // tricle down
      this.sinkDonw()
    }

    return max
  }

  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]

    while (true) {
      let lefChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null

      if (lefChildIdx < length) {
        leftChild = this.values[lefChildIdx]

        if (leftChild > element) {
          swap = lefChildIdx
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]

        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx
        }
      }

      if (swap === null) {
        break
      }

      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap

    }
  }
}
