/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
*/

/*
Example:
countUniqueValues([1,1,1,1,1,2]); // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]); //7
countUniqueValues([]); //0
countUniqueValues([-2,-1,-1,0,1]); //4
*/

function countUniqueValuesZZZ(arr) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let sum = arr[left] + arr[right]

    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

function countUniqueValues(arr) {
  //if(arr.length === 0){
  //return console.log('el valor es: ' + 0);
  //return 0;
  //}

  let j = 0

  for (let i = 1; i <= arr.length; i++) {
    if (arr[j] === arr[i]) {
      arr[j]
    } else {
      j++
      arr[j] = arr[i]
    }
  }
  //return console.log('el valor es: ' + j);
  return j
}

//better aproach
function countUniqueValuesBetter(arr) {
  if (arr.length === 0) return 0

  let j = 0

  for (let i = 1; i <= arr.length; i++) {
    if (arr[j] !== arr[i]) {
      j++
      arr[j] = arr[i]
    }
    console.log(j, i)
  }

  return j
}

//countUniqueValues([]);
//countUniqueValues([1,1,1,1,2,3,4,4,4,7,7,12,12,13]);
//countUniqueValuesBetter([]);
countUniqueValuesBetter([1, 1, 1, 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
