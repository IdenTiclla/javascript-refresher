const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "anna",
    age: 25,
    position: "designer",
  },
  {
    name: "susy",
    age: 30,
    position: "the boss",
  },
];


const newPeople = people.map(person => {
    return {
        name: person.name.toUpperCase(),
        age: person.age,
        position: person.position[0].toUpperCase() + person.position.slice(1)
    }
}) 


console.log(newPeople)