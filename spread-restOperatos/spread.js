const oldArray = [1,2,3,4]

const newArray = [...oldArray, 5, 6, 7, 8, 9, 10]

console.log(newArray)

const oldObject = {
    name: 'Iden',
    lastname: 'Ticlla'
}

const newObject = {
    ...oldObject,
    birthday: new Date(1998, 0, 29)
}

console.log(newObject)