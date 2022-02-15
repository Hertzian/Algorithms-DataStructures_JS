/**
 * Radix sort helpers
 * In order to implement radix sort, it´s helpful to build a few helper functions first:
 * getDigit(num, place) - returns the digit in num at the given place value.
 */

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

/**
 * digitCount(num) - returns the number of digits in num
 */

function digitCount(num) {
  if (num === 0) {
    return 1
  }

  return Math.floor(Math.log10(Math.abs(num))) + 1
}

/**
 * mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list
 */

function mostDigits(nums) {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }

  return maxDigits
}

/**
 * Radix sort
 * Define a function that accepts list of numbers.
 * Figure out how many digits the largest number has.
 * Loop from k = 0 up to this largest number of digits.
 * For each iteration of the loop:
 * Create buckets for each digit (0 to 9).
 * Place each numbre in the corresponding buckt based on its kth digit.
 * Replace our existing array with values in our buckets, starting with 0 and goig up to 9.
 * Return list at the end!
 *
 */

function radixSort(nums) {
  let maxDigitsCount = mostDigits(nums)

  for (let k = 0; k < maxDigitsCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k)
      digitBuckets[digit].push[i]
    }

    // [].concat([[1],[2],[3]]); // >>> [1,2,3]

    nums = [].concat(...digitBuckets)
  }
  return nums
}

radixSort([23, 345, 5467, 12, 2345, 9852])
