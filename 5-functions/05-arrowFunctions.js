/*
    ARROW FUNCTIONS

    - arrow functions (fat arrow fxns) are a more concise way to write a fxn expression
    - fxn expressions do NOT get hoisted ^

*/
// REGULAR FXN EXPRESSION

// let hello = function () {
    
// }


// BLOCK BODY ARROW FUNCTION

let hello = () => {     // any parameter your fxn may hold gos inside ()
    console.log('Hello WORLD!');

}
hello()

// CONCISE BODY ARROW FUNCTION

let slash = () => console.log('I am a cat!');
slash();

/*
    NOTE: concise body arrow functions return any value by default,
          block body arrow functions will not - must implicitly 
          specify what value we want to return. 
*/

// CONCISE VS BB ARROW FUNCTIONS

// CBAF

let apples = (number) => console.log(`There are ${number} apples in the bucket.`)
// when we have a single parameter () aren't neccessary

apples(12);
apples(7)

// BBAF

let oranges = (number) => {
    console.log(`There are ${number} oranges in the truck.`)
}
oranges('thirteen');
oranges(999)

// when your fxn needs more complexity use BBAF vs simple = CBAF

