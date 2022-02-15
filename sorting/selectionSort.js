/**
 * Store the first element as the smallest value youé seen son far.
 * Compare this item to the next item in the array until you find a smaller number.
 * If a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the arra.
 * If the minimum is not the value (intex) you initially began with, swap the two values.
 * Repeat this with the next element until the array is sorted.
 */
let test = [37, 45, 29, 8]

let swap = (arr, in1, in2) => {
  ;[arr[in1], arr[in2]] = [arr[in2], arr[in1]]
}

function selectionSortMe(arr) {
  let smaller = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[smaller] > arr[j + 1]) {
        smaller = j + 1
        j + 1
      } else {
        arr[smaller]
        break
      }
      console.log('------------------')
      console.log(arr, arr[j], arr[j + 1])
      console.log(arr[smaller])
    }
  }

  console.log(arr)
  return arr
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i

    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j)
      if (arr[lowest] > arr[j]) {
        lowest = j
      }
    }

    if (i !== lowest) {
      // swap
      console.log('**********')
      console.log(arr)
      console.log('Swapping to: ')

      let temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp

      console.log(arr)
      console.log('**********')
    }
  }

  console.log('Result: ')
  console.log(arr)
  return arr
}

// selectionSort([37,45,29,8]);
selectionSort([34, 22, 10, 19, 17])
