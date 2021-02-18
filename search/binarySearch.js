/**
 * This function accepts a sorted array and a valu.
 * Create a left pointer at the start of the array, and a right pointer at the end of the array.
 * While the left pointer comes before the right pointer:
 * -Create a pointer in the middle.
 * -If you find the value you want, return the index.
 * -If the value is too small, move the left pointer up.
 * If the value is too large, move the right pointer down.
 * If you never find the value, return -1.
 *
 * binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99],10); // 2
 * binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99],95); // 16
 * binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99],100); // -1
 */

function binarySearchMM(arr, val) {
  let left = 0
  let right = arr.length - 1
  let middle = Math.floor((left + right) / 2)

  for (let i = left; i < right; i++) {
    if (val === arr[middle] || val == arr[i]) {
      return middle
    }

    if (val > arr[middle]) {
      left = middle + 1
    }

    if (val < arr[middle]) {
      right = right - 1
    }
  }

  return -1
}

function binarySearch(arr, elem) {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)

  while (arr[middle] !== elem && start <= end) {
    console.log(start, middle, end)

    if (elem < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }

  console.log(start, middle, end)

  if (arr[midle] === elem) {
    return middle
  }

  return -1
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28)
