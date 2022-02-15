/*
Write a function called maxSubarraySum wich accepts an array of integers and a number called n.
The function should calculate te maximum sum of n consecutive elements in the array
*/

/*
Naive solution
*/

function maxSubarraySumNaive(arr, num) {
  if (num > arr.length) {
    return null
  }

  let max = -Infinity

  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0

    for (let j = 0; j < num; j++) {
      temp += arr[i + j]
    }

    if (temp > max) {
      max = temp
    }

    console.log(temp, max)
  }

  return max
}

// refactor
function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0

  if (arr.length < num) {
    return null
  }

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
    console.log('first cumulative: ' + maxSum)
  }

  console.log('First max: ' + maxSum)
  console.log('----------------------')

  tempSum = maxSum

  for (let i = num; i < arr.length; i++) {
    console.log('Loop no. ' + i)
    tempSum = tempSum - arr[i - num] + arr[i]
    console.log('places: ' + (i - num), i)

    // maxSum = Math.max(maxSum, tempSum);
    if (tempSum > maxSum) maxSum = tempSum
    console.log('maximum ' + maxSum)
  }

  console.log('return: ' + maxSum)
  return maxSum
}

function reverse(arr, num) {
  let maxSum = 0
  let tempSum = 0

  if (arr.length < num) {
    return null
  }

  for (let i = arr.length - 1; i > num; i--) {
    maxSum += arr[i]
    console.log('first cumulative: ' + maxSum)
  }

  console.log('First max: ' + maxSum)
  console.log('----------------------')

  tempSum = maxSum

  for (let i = arr.length; i > num; i--) {
    console.log('Loop no. ' + i)
    tempSum = tempSum - arr[i - num] + arr[i]
    console.log('places: ' + (i - num), i)

    console.log('***' + tempSum)
    maxSum = Math.max(maxSum, tempSum)
    console.log('---' + maxSum)
    if (tempSum > maxSum) maxSum = tempSum
    console.log('maximum ' + maxSum)
  }

  console.log('----------------------')
  console.log('return: ' + maxSum)
  return maxSum
}

reverse(
  [1, 2, 3, 4, 5, 56, 6, 7, 7, 0.7, 8, 8, 8, 8, 8, 7, 56, 4, 34, 23, 2, 2, 34],
  3
)
