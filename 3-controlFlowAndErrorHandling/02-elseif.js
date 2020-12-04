
let temp = 80;

if (temp < 70) {
    console.log('Wear a jacket!')
} else { 
    console.log('Bring a jacket!')
}

let name = 'Mark';

if (name == 'Sam') {
    console.log(name)
    console.log('HEllO MY NAME IS SAM!')
} else {
    console.log('Hello, is your name', name,'?')
}



let name = 'SAmUEl';

// BRONZE

// console.log(name.charAt(1))
// console.log(name[0])

if (name[0] == name[0].toUpperCase()) {
    console.log(name)
}  else {
    console.log('Hey, this isnt written correctly!')
}

// SILVER

let name = 'SAmUeL';

if (name[0] == name[0].toUpperCase()) {
    console.log(name.charAt(0))
} else {
    console.log(name.slice(1,6).toLowerCase())
}

//GOLD

let name = 'samUEl';

if (name[0] == name[0].toUpperCase()) {
    console.log(name.charAt(0) + name.slice(1).toLowerCase());
}   else {
    console.log(name[0].toUpperCase() + name.slice(1,6).toLowerCase())
}


let address = 'Lafayette, IN';

console.log(address.substr(-4)) //Negative starts from the end and moves right to left

let age = 12;

if (age >= 25) {
    console.log('You can rent a car!');
} else if (age >= 21) {
    console.log('You can drink!');
} else if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You are too young!');
}

