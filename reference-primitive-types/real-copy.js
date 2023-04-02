const person = {
    name: 'max'
}


const newPerson = {
    ...person
}

person.name = 'Manu'

console.log(newPerson)