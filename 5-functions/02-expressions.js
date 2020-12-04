// FUNCTION expressions are stored inside of a variable

let hello = function () {       // An annonymous FUNCTION
    console.log('hi!')
}

hello();        // when calling a function expression, the name of the variable needs to be called


/*
    DIFFERENCE BETWEEN FUNCTION DECLARATIONS AND FUNCTION EXPRESSIONS

    - function declarations are hoisted
    - function expressions are NOT hoisted
*/

// declaration 

function decTest() {
    console.log('it worked, I was hoisted ;)')
}
decTest();

let expTest = function () {
    console.log('did not work, I was not hoisted :(')
}
expTest();

