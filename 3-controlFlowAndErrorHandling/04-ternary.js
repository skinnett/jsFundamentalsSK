// Ternary basically act as a shortcut for writing if and if/else statements

let num = 6;

// Ternary:

(num > 0) ? console.log('yes') : console.log('no');

//(condition) ? code to run if condition true : code to run if condition not true

// Instead of an If/Else


// Conditonal with if & else if

if (num > 10) {
    console.log('a first statement');
} else if (num < 0) {
    console.log('another statement')
} else {
    console.log('yet another, man')
}

(num > 10) ? console.log('a first statement') : (num < 0) ? console.log('another statement') : console.log('yet another, man');


// TERNARY 

let age= 20;

(age >= 25) ? console.log('You can rent a car') : (age >= 21) ? console.log('You can drink') : (age >= 18) ? console.log('You can vote') : console.log('You are too young!');


