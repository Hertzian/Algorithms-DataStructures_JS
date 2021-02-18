/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word , phrase, or name formed by rearranging the letter of another, such as cinema, formed from iceman.
*/

/*
Examples:
validAnagram('',''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', nagaram); / true
validAnagram('rat', 'car'); // false
validAnagram('awesome', 'awesom'); // false
validAnagram('qwerty','qeywrt'); // true
validAnagram('texttwisttime', 'timettwisttext'); // true
*/

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.legth !== str2.legth) {
    console.log('ni pa queee')
    return false
  }

  let counter1 = {}
  let counter2 = {}

  for (let val of str1) {
    counter1[val] = (counter1[val] || 0) + 1
  }

  for (let val of str2) {
    counter2[val] = (counter2[val] || 0) + 1
  }

  for (let key in counter1) {
    if (!(key in counter2)) {
      console.log(counter1)
      console.log(counter2)
      console.log('aqui')
      return false
    }
    if (counter2[key] !== counter1[key]) {
      console.log(counter1)
      console.log(counter2)
      console.log('aca')
      return false
    }
  }
  return true
}

function validAnagramC(first, second) {
  if (first.legth !== second.legth) {
    return false
  }

  const lookup = {}

  for (let i = 0; i < first.legth; i++) {
    let letter = first[i]
    // if letter exists increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }
  console.log(lookup)

  for (let i = 0; i < second.legth; i++) {
    let letter = second[i]
    // can´t find letter or letter is zero then it´s not an anagram
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }

  return true
}

//validAnagram('',''); // true
//validAnagram('aaz', 'zza'); // false
//validAnagram('anagram', 'nagaram'); // true
//validAnagram('rat', 'car'); // false
//validAnagram('awesome', 'awesom'); // false
//validAnagram('qwerty','qeywrt'); // true
//validAnagram('texttwisttime', 'timetwisttext'); // true
