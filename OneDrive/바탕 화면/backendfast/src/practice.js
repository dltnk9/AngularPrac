const people = [
  {
    age: 20,
    city: '서울',
    pet: ['cat', 'dog'],
  },
  {
    age: 40,
    city: '부산',
  },
  {
    age: 24,
    city: '서울',
    pet: 'dog',
  },
]

function solveA() {
  /** @type {string[]} */
  const cities = []

  for (const person of people) {
    if (person.age < 30) {
      if (!cities.find((city) => person.city === city)) {
        cities.push(person.city)
      }
    }
  }
  return cities
}

function solveAFunctional() {
  const allCities = people
    .filter((person) => person.age < 30)
    .map((person) => person.city)
  const set = new Set(allCities)
  return Array.from(set)
}
console.log(solveA())
console.log(solveAFunctional())

document.getElementById('myButton').addEventListener('click', function () {
  console.log('button clicked')
})
setTimeout(function () {
  console.log('1초경과')
}, 1000)

var res = [1, 2, 3].map(function (item) {
  return item * 2
})
console.log(res)
