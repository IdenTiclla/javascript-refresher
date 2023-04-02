// DEFAULT EXPORT
// export default person 
import person from "./person"
import prs from './person'


// NAMED EXPORT

// export const baseData = 10
// export const suma = (a,b) => a + b
import { baseData } from "./utility"
import { suma as myFunctionSuma } from "./utility"


const resultado = suma(1, 5)
console.log(resultado)