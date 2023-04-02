const person = {
    name: 'max'
}

// Is not a real copy
const secondPerson = person

person.name = 'Gerson'

// this will print Gerson because second secondPerson copies the pointer
console.log(secondPerson)

