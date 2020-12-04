/*
    SCOPE

    - How a computer keeps track of all the variables in our program.
    - Scopes can be nested together (global/local) *Any variables that we create that are local are only available in that scope
    - When opening a {} we create a new local scope
    - globally scoped variables are accessible anywhere in our document
*/

let x = 12; 

function scope() {
    let x = 33; 
    console.log(x);
}

scope();    // calling the function by its name followed by () invokes the function
console.log(x);

let y = 12;

function newScope() {
    y = 33;
    console.log(y)
}

newScope();
console.log(y);

/*
    VAR vs let

    - while var and let seem to operate the same, they have a lot of the same functionality (both allow us to declare and intiialize variable) they also behave differently
    - VAR is scoped to the nearest function block
    - LET is scoped to the nearest enclosing block
*/

// var testOne = 'this is a test'
// let testTwo = 'this is another test'

// console.log(testOne, testTwo)

// VAR

var x = 12;

function varTest() {
    var x = 33;
    if (1 == 1); {
        var x = 45; 
        console.log(x);
    }
    console.log(x);
}

varTest(); 
console.log(x);

// LET

let y  = 12;

function letTest() {
    var y = 33;
    if (true); {
        let y = 45;
        console.log(y);
}
    console.log(y);
}

letTest();
console.log(y);

