const names = [
    {name:'Angelica',age:25},
    {name:'Monica',age:26}
]

//es5

let listoOfNames5 = names.map(function (item) {
    console.log(item.name)
})

//es6 --> arrow functions
let listoOfNames = names.map(item => console.log(item))

const listoOfNames6 = names.map(item => console.log(item.name))

//estructura

const listoOfNames1 = () => {}

//retorna una multiplicacion
const square = num => num * num


//promesas

const helloPromise = () => {
    return new Promise((resolve,reject) => {
        if(false) {
            resolve('Hey!')
        }else {
            reject('Ups!')
        }
    })
}

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error))