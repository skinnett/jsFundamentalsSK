/*
    RETURN

    - the return keyword allows us to return a variable or value that is 
    local to the scope of a function, and access that variable or value
    within the global scope of the document.
*/

// function declaration

function myName(fName) {
    console.log(fName);

    return fName;
}

// myName('Samuel')
// when we return a value from a fxn we need to capture the return value from the fxn

let myNameIs = myName('Samuel')
console.log(myNameIs)

function hello() {
    let a = 'A';
    let b = 'B';
    let c = 'C';

    let ABC = `The first 3 letters of the alphabet are ${a}, ${b}, ${c}`
    return ABC;
}

let string = hello();

console.log(string);

// BLOCK BODY ARROW FUNCTION

let myName = fName => {
    return fName;
}

let myNameIs = myName('Samuel');
console.log(myNameIs);

// CONCISE BODY ARROW FUNCTION

let name = lName => lName; // return not needed in CBAF 

let captureReturn = name('Kinnett');
console.log(captureReturn);