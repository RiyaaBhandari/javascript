const score=100
console.log(score)

const number= new Number(200)
console.log(number)

console.log(number.toString().length)
console.log(number.toFixed(2))

const anothernum=123.8997
console.log(anothernum.toPrecision(5))

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'))

//------------------------------Maths-----------------------------------------------

console.log(Math) //object [Math]{}
console.log(Math.abs(-5)) // change -ve to +ve
console.log(Math.round(4.6))//5
console.log(Math.ceil(4.2))// (5)always take upper round of value
console.log(Math.floor(4.8))//(4) always takes lower round of value
console.log(Math.min(4,3,6,2))
console.log(Math.max(4,8,6,9,4))

console.log(Math.random()) // generate random number between 0 and 1
console.log(Math.random()*10)//generate random number between 0 to 9
console.log(Math.random()*10+1)// to avoide 0

// one trick to print number between min and max value
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min +1)) + min)