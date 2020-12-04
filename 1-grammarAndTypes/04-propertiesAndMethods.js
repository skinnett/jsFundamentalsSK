/*
    PROPERTIES AND METHODS 

    - Properties: qualities related to the data that we're working with
    - Methods: actions we can perform on the data we're working with.

    - Using a mehod causes something to happen to the data, while using a property returns information about the data.
    - ".property" and ".methods()"

*/

// STRING PROPERTIES

// Length - Counts the characters in a string

let myName = 'Samuel';

console.log(myName.length);

// STRING MENTHODS

let myCatsName = "Slash";

console.log(myCatsName.toUpperCase())   // Capitalizes entire string 

let home = 'My home is Indianapolis';

console.log(home.includes('Indianapolis'));  // Searches for item in a string

// Challenge: Use Google to find the MDN documentaion for string methods.  Split Method use and implement. 


let Sam = 'My name is Sam, and I enjoy Scuba Diving';

console.log(Sam.split(' '));
console.log(Sam.split(','));

