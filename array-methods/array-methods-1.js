const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  { name: "anna", age: 35, position: "intern" },
];

// filter returns an array
const developers = people.filter(element => element.position === 'developer')
console.log(developers)

// find returns an object: the first if there is more than 1
const peter = people.find((person) => person.name == "peter")
console.log(peter)

// returns an array of al the people with age >= 30
const olderPeople = people.filter((person) => person.age >= 30)
console.log("older people")
console.log(olderPeople)
