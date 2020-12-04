/*
    FOR OF LOOPS

        - where for in loops look at enumerable(countable) properties, for of loops look at iterable properties
        - Iterable properties are properties that we can parse through with numbers or indicies

        - for in loops: better for objects
        - for of loops: better for arrays 

*/
// Using a for loop with an object will error since for of loops look at iterable properties and objects have enumerabler properties

let student = {
    name: 'Sam',
    awesome: true,
    degree: 'JavaScript',
    week: 1
}

for (let item of student) {
    console.log(item);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'slash', 'rag doll']

for (let cat of catArray) {
    console.log(cat);
}

for (let i = 0; i < catArray.length; i++) {     // much longer way to do it with just a for loop
    console.log(catArray[i]);
}

