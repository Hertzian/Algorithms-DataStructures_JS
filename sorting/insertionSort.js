/**
 * Start by picking the second element in the array.
 * Now compare the second element with the one before it and swap if necessary.
 * Continue to the next element and if it is in the incorrect order, iterate through the sorted portion
 * (i.e. the left side) to place the element in the correct place.
 * Repeat until the array is sorted.
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]

    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
      console.log(arr)
    }
    arr[j + 1] = currentVal
  }

  console.log(arr)
  return arr
}

insertionSort([2, 1, 9, 76, 4])
