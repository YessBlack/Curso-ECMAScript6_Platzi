function newFunction(name,age,country) {
    var name = name || 'Angelica'
    var age = age || 25
    var country = country || 'CO'
    console.log(name,age,country)
}

//es6

function newFunction1(name="Yessenia",age=26,country="ES") {
    console.log(name,age,country)
}

newFunction1()
newFunction1('Jose',37,'EU')

//template

let hello = 'Hello'
let world = 'World'
let epicPhrase = hello + ' ' + world

console.log(epicPhrase)

//es6

let epicPhrase1 = `${hello} ${world}`
console.log(epicPhrase1)

//destructuracion 

let person = {
    'name':'Angelica',
    'age':25,
    'country':'CO'
}

let {name, age, country} = person

console.log(name,age,country)

//spreed operator

let team1 = ['Angelica','Monica','Suly']
let team2 = ['David','Jose','Sara']

let friends = [...team1,...team2,'Maria']

console.log(friends)

