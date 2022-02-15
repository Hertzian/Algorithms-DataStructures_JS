/**
 * Suppose you want to count the number of times a smaller string appears in a longer string.
 * A straightforward approach involves checking pairs of characters individually.
 */

/**
 * Loop over the longer string.
 * Loop over the shorter string.
 * If the characters don´t match, break out of the inner loop.
 * If the characters do match, keep going.
 * If you complete the inner loop and find a match, increment the count of matches.
 * Return the count.
 */

function naiveSearch(long, short) {
  let count = 0

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(short[j], long[i + j])

      if (short[j] !== long[i + j]) {
        console.log('break!')
        break
      }

      if (j === short.length - 1) {
        console.log('found one!')
        count++
      }
    }
  }
  console.log(count)
  return count
}

naiveSearch('lorie loled', 'pop')
