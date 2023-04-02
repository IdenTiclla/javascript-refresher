class Human {
    constructor() {
        this.gender = "Male"
    }
    printGender() {
        console.log(this.gender)
    }
}


class Person extends Human {
    constructor() {
        super()
        this.name = 'max'
    }
    saludar = () => {
        console.log("hola " + this.name)
    }
}

const person = new Person()
person.saludar()
person.printGender()