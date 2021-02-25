// let total = 0
// total += 'hello'.charCodeAt(-96)
// total += 'hello'.charCodeAt(-96)
// total += 'hello'.charCodeAt(-96)
// total += 'hello'.charCodeAt(-96)
// total += 'hello'.charCodeAt(-96)
// total
// 13 % 3

function hash0(key, arrayLenght) {
  let total = 0
  for (let i = 0; i < key.length; i++) {
    const char = key[i]
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLenght
  }

  return total
}

function hash1(key, arrayLenght) {
  let res = 0

  for (let char of key) {
    // map 'a' to 1, 'b' to 2, 'c' to 2, etc.
    let value = char.charCodeAt(0) - 96

    res = (res + value) % arrayLenght
  }

  return res
}

function hash(key, arrayLenght) {
  let total = 0
  let WEIRD_PRIME = 31

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = array[i]
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLenght
  }

  return total
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = array[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }

    return total
  }

  /**
   * Set
   * Accepts a key and a value
   * Hashed the key
   * Stores the key-value pair in the hash table array via separate chaining
   */
  set(key, value) {
    let index = this._hash(key)

    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }

  /**
   * Get
   * Acepts a key
   * Hashes the key
   * Retrives the key-value pair in the hash table
   * If the key isn't found, return undefined
   */
  get(key) {
    let index = this._hash(key)

    if (!this.keyMap[index]) {
      // return this.keyMap[index] // return entire set of data in this place
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }

        const key = this.keyMap[index][i]
      }
    }
    return undefined
  }

  /**
   * keys
   * Loops through the hash table array and returns an array of keys in the table
   */
  keys() {
    let keysArr = []

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }

    return keysArr
  }

  /**
   * values
   * Loops through the hash table array and returns an array of values in the table
   */
  values() {
    let valuesArr = []

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }

    return valuesArr
  }
}

let ht = new HashTable(17)
ht.set('marron', '#800000')
ht.set('yellow', '#ffff00')
ht.set('olive', '#808000')
ht.set('salmon', '#fa8072')
ht.set('lightcoral', '#f08080')
ht.set('mediumvioletred', '#c71585')
ht.set('plum', '#dda0dd')
