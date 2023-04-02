const filter = (...args) => {
    return args.filter(el => el === 1 || el === 5)
}

console.log(filter(1, 2, 3, 4, 5))