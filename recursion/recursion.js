function takeShower() {
  return console.log('Showering')
}

function eatBreakfast() {
  let meal = cookFood()

  return console.log(`Eating ${meal}`)
}

function cookFood() {
  let items = ['Oatmeal', 'Eggs', 'Protein shake']

  return items[Math.floor(Math.random() * items.length)]
}

function wakeUp() {
  takeShower()
  eatBreakfast()

  return console.log('Ok, ready to work!')
}

// wakeUp();

// NO recursive form
function countDown(num) {
  if (num <= 0) {
    console.log('All done recursive')
    return
  }

  console.log(num)

  num--

  countDown(num)
}

// countDown(5);

// recursive form
function countDownRecursive(num) {
  for (let i = num; i > 0; i--) {
    console.log(i)
  }

  console.log('All done iterative')
}

// countDownRecursive(5);

function sumRange(num) {
  if (num === 1) {
    return 1
  }

  return num + sumRange(num - 1)
}

// sumRange(10);

function factorialIter(num) {
  let total = 1
  for (let i = num; i > 1; i--) {
    total *= i
  }
  return total
}

function factorial(num) {
  if (num === 1) {
    return 1
  }

  return num * factorial(num - 1)
}

// recursion helper recursion

function collectOdds(nums) {
  let result = []

  function helper(helperInut) {
    if (helperInut.length === 0) {
      return
    }

    if (helperInut[0] % 2 !== 0) {
      result.push(helperInut[0])
    }

    helper(helperInut.slice(1))
  }

  helper(arr)

  return result
}

// without helper...

function collectOddValues(arr) {
  let newArr = []

  if (arr.legth == 0) {
    return newArr
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)))

  return newArr
}
