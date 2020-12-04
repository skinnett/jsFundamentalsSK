/*
    ARRAY METHODS

        - array methods are built into JS that we can use to make our lives easier
*/

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hot Dog'];

// array.push()    - allows us to push one or more elements to the end of our array

food.push('Pizza');

console.log('push:', food);

// array.splice(delete)   - splice method allows us to add and remove elements from an array

food.splice(1, 1, 'Bananas');

console.log('splice:', food);


// array.pop() - the pop method removes the last item from an array

food.pop();
console.log('pop', food);

// array.shift()  -  removes the first item of the array

food.shift();
console.log('shift', food);

// array.unshift()  -  the unshift method adds one or more elements to the beginning of an array

food.unshift('Popcorn', 'Steak');
console.log('unshift', food);

