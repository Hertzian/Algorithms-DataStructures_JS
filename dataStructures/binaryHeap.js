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
    this.bubbeUp()
  }

  bubbeUp() {
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
}
