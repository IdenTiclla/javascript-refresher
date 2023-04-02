const numbers = [1, 2, 3]

const doubleNumArray = numbers.map(element => element * 2)

const tripleNumArray = numbers.map((element => {
    return element * 3
}))

console.log(doubleNumArray)
console.log(tripleNumArray)
