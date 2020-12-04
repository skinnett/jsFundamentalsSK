/*
    - arrays are containers that hold a list of items
        - arrays can hold numerous data types
    - denoted by []
*/

let list = ['orAnGe', 'banANa', 'aPple'];

console.log(list[1]);

/*
    - when we call an array, we can append [] with the index # we want to reference.
    - JavaScript starts counting at 0
*/

let students = ['Amruta', 'Marco', 'Nick', 'Carolina', 4, true, ['Adam', 'Alexandra', 'Alexia', 'Allyson']];

console.log(typeof students);  // objects 

console.log(students instanceof Array); // instanceof operator is used to check the type of object (true or false)
console.log(students[2]); // Nick

console.log(students[6][2]); // add the second [] to hone on the nested array


let name = students[6][1];
console.log(name);  // ALexandra

