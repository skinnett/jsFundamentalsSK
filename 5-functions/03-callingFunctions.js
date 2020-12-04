// CALLING FUNCTIONS

function hello() {
    console.log('hi!')
}
// hello();  // gives expected output of 'hi!'

// console.log(hello);  // indicates a function exists which is 'hello'

console.log(hello());  // hi!    undefined - function invocations happen immediately once the line of code is read.  the function will run before anythign else in the line of that that will run

// CHALLENGE:  create a function that when invoked prints out the numbers 1-10

function count() {
for (let i = 1; i <= 10; i++) {
    console.log(i);
    }
}
count()

// CHALLENGE: given the array, create a function that lists the values individually 

function splitter() {
let arr = ['This', 'is', 'really', 'cool'];

for (let _arr in arr) {
    console.log(arr[_arr]);
    }
}
splitter();
