class Human {
    gender = "Male"
    
    printGender = () => {
        console.log(this.gender)
    }
}


class Person extends Human {
    name = 'Andrea'
    gender = "Female"
    
    printMyName = () => {
        console.log("Hello " + this.name)
    }
}

const person = new Person()
person.printMyName()
person.printGender()