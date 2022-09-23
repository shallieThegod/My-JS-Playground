console.log('hello world');
console.log('Shallie'); 
name = 'The god';
console.log(name);
sentence = ('I love oscar so much.. i hope we grow old, in luxury together!');
console.log(sentence);

// operators
Food = Number(prompt('How much?'));
TipPercentage =Number(prompt('Tip percentage?')) / 100;
TipAmount = Food * TipPercentage;
Total = Food + TipAmount;

console.log('Tip amount', TipAmount);
console.log('Total', Total);

// user input
fruit = prompt('What is your favourite fruit?');
console.log(fruit);

// Making a baby weather app with (conditionals)
if it rains, get an umbrella
if not (else), wear sunglasses

let weather = prompt(' How is the weather?')

if (weather == 'rainy'){
    console.log('Grab your umbrella!')
} else{
    console.log('wear your sunglasses')
}

// functions 
// This is a function called 'SayMyName'
// it has 0 arguement, it logs out your name to the console

function SayMyName(){
     console.log('Shallie')
 }
 
SayMyName() 

// This is a function called 'SayMyName2'
// it has 1 arguement called 'name', it logs out your name to the console

function SayMyName2(name){
    console.log(name)
}
 
SayMyName2('Lance')   

// *An arguement can be found inside the function's name's bracket!

function greeting(name){
greet = 'Hi ' + name + ', Nice to meet you!' 
template literals (``) ... wrap up in ${} to turn string to code
   greet = `Hi ${name}, Nice to meet you!`
    console.log(greet)
}

greeting('Shally')
 
function sum(a, b) {
    return as opposed to console.log because we would
    //  reuse the value and can save something into it like variable ish
    return a + b
}

console.log(sum(1, 2))

function sum(a, b) {
    return a + b
    }
    
    console.log(sum(1, 2))

    // you can store the result in a variable like so
    Num1 = sum(1, 2)
    console.log(Num1)

    // to really understand below is a full line of code

    function sum(a, b) {
        return a + b
    }
    Num1 = sum(1, 2)
    console.log(Num1)

function CalFoodTotal(Food, Tip){
TipPercentage = Tip / 100;
TipAmount = Food * TipPercentage;
Total = Food + TipAmount
return Total
}

Total = CalFoodTotal(300,20)
console.log(Total);

// ES6:ARROW FUNCTIONS =>

// arrow functions with EXPLICIT returns
const SumArrow = (a, b) =>{
    return a + b
}

console.log(SumArrrow(10, 50))

// arrow functions with IMPLICIT returns[remove curly brackets]
const SumArrow2 = (a, b) => a + b

console.log(SumArrow2(10, 50))

// writing arrow functions with implicit returns that adds,
// subtracts, divides and multiplies 2 numbers each

// addition


// 1hr,10mins into video(replit cheat)

// ARRAYS
// methods; push, slice, indexOf, length

const groceries = ['corn', 'pear', 'orange', 'fish']
can also be written as
const groceries = [
    'corn',
    'pear',
    'orange',
    'fish']

console.log(groceries)
getting a particular index in an array
console.log(groceries[2])
"push"
groceries.push('limes')
console.log(groceries)
"slice"
console.log(groceries.slice(0, 2))
console.log(groceries.slice(2, 5))
indexOf
console.log(groceries.indexOf('limes'))
const groceries = ['corn', 'pear', 'orange', 'fish']
length
console.log(groceries.length)
// pop
 

// OBJECTS
const person = {name: 'Shallie', EyeColour: 'brown'}
can also be written as
const person = {
    name: 'Shallie',
    EyeColour: 'brown'
}
// accessing objects
// dot notation

console.log(person.name)
console.log(person.EyeColour)
bracket notation
console.log(person['name'])
console.log(person['EyeColour'])
assigning properties to an object
person.size = '40'
// can be written as
person['size'] = '40'
console.log(person.size)
console.log(person)

const qazi = {
    name: 'Rafeh Qazi'
    shirt: 'Black'
}

console.log(qazi['shirt'])