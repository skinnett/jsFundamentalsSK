/* 
variables are named containers for storing data values or data types
we name variables so that we can refer to the data they're holding at a later point in time
*/

    let  number    =    2;

/*  (1)   (2)     (3)   (4)

1- javascript keyword
2- variable name
3- assignment operator
4- value of the variable
*/

let numberOne = 5;
let numberTwo = 3;

console.log(numberOne + numberTwo); //output 8

/* 
a variable name must begin with a letter, underscore, or a dollar sign
a number may follow the above characters, but they cannot come first
javasript is case sensitive 'hello' and 'Hello' are different variables 
no spaces allowed in variable names
camelCase is the best practice for naming variables

var, let const

    var: 'old' keyword for variables
    let: 'new' keyword for variables
    const: 'new' keyword for variables; denotes an unchangable variable name

declaration vs initialization

    declarations are the left side of the assignment operator when writing a variable

    initialization is the right side of the assignment operator (the value assigned to a variable)
*/

let x;
console.log('Declaration:', x);
x = 10;
console.log('Initialization:', x);

x = 20; 
console.log('Reinitialization:',x);

// BOOLEAN (two possible values of true or false)

let lightIsOn = true;
console.log(lightIsOn);

let lightIsOff = false;
console.log(lightIsOff);

//Null (an empty value)

let empty = null;
console.log(empty);

//UNDEFINED (no value has been assigned so it doesnt act as an empty container)

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

//NUMBERS (numbers or integers 1, 3 5, etc. )

let degrees = 40;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 99999999999999999999;
console.log(rounded);

let a = Number('123');
console.log(a);

//STRINGS (datatypes used to represent text and are either wrapped in single or double quotes

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne,stringTwo);

let first = 1200 + 100; 
let second = '1200' + '100';

console.log(first);
console.log(second);

console.log(typeof first); //number
console.log(typeof second); //string

let third = 1050 + '100';
console.log(third);
console.log(typeof third);

//OBJECT  (allow us to store multiple values instead of a single value & denoted by {}  )

let frodo = {
   race: 'hobbit', 
// key    value
    ring: 1,
    cloak: true
}

console.log(frodo);

//ARRAYS (containers that hold a list of items | Denoted by square brackets)

let burritos = ['large', 4, false];
console.log(burritos);










let firstName = 'Sam';
let lastName = 'Kinnett';
let houseNumber = 651;
let street = 'Godby';
let city = 'Avon';
let state = 'Indiana';
let zipcode = 47933;

console.log(firstName, lastName, houseNumber, street, city, state, zipcode);