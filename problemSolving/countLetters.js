function countLetters(str) {
  let result = {}

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()

    if (result[char] > 0) {
      result[char]++
    } else {
      result[char] = 1
    }
  }

  return result
}

function countRegEx(str) {
  let result = {}

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()

    if (/[a-z0-9]/.test(char)) {
      // alternative to if statement
      // result[char] = ++obj[char] || 1;

      if (result[char] > 0) {
        result[char]++
      } else {
        result[char] = 1
      }
    }
  }
  return result
}

// countLetters('hola pedazo de Wey!');
countRegEx('hola pedazo de Wey!')
