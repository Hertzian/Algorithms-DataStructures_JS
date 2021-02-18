class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName
    this.lastName = lastName
    this.grade = year
    this.tardies = 0
    this.scores = []
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`
  }

  markLate() {
    this.tardies += 1

    if (this.tardies >= 3) {
      return 'YOUR ARE EXPELLED!!!'
    }

    return `${this.firstName} ${this.lastName} has ben late ${this.tardies} times`
  }

  addScore(score) {
    this.scores.push(score)

    return this.scores
  }

  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b
    })

    return sum / this.scores.length
  }

  // static enrollStudents(...students){
  //     // maybe send an email here
  //     console.log(students);
  // }

  static enrollStudents() {
    console.log('Enrolling students')

    return 'Enrolling students'
  }
}

let emil = new Student('Emil', 'Kats', 3)
let colt = new Student('Colt', 'steele', 2)
let blue = new Student('Blue', 'Steele', 1)

console.log(emil.addScore(92))
console.log(emil.addScore(87))
console.log(emil.addScore(76))
console.log(emil.addScore(100))
console.log(emil.calculateAverage())

// Static keyword
// Student.enrollStudents();// only this works! because it´s an utility method
// emil.enrollStudents();

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  static distance(a, b) {
    const dx = a.x - b.x
    const dy = a.y - b.y

    console.log(Math.hypot(dx, dy) + ' units')
    return Math.hypot(dx, dy)
  }
}

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)

Point.distance(p1, p2)
