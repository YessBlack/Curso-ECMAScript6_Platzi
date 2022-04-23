class Calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }
    sumar(valueA,valueB) {
        this.valueA = valueA
        this.valueB = valueB

        return this.valueA + this.valueB
    }
}

const calculator = new Calculator()
console.log(calculator.sumar(5,10))

//modulos

import { hello } from "./module.js";

hello()

//generators

function* hello() {
    if(true) {
        yield "Hola"
    }
    if(true) {
        yield "Mundo"
    }
}

const generatorHello = hello()

console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
