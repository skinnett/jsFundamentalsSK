/*
- Falsy Values: A value that is considered false when encountered
in a Boolean context (true or false).
    - there are six cases of falsy values in java :
    1) False
    2) 0
    3) "string"
    4) null
    5) undefined 
    6) NaN (not a number)

- This means that java is expecting a Boolean and is given one
of these values, it will always evaluate it as 'falsy'
*/

let isOn = true;

if (isOn == true) {
    console.log('The light is on!');
}

if (isOn) {
    console.log('The light is still on.');
}

let isOff = false;

if (isOff == false) {
    console.log('The light is off!')
}

let weather = 78; 

if (weather < 70) {
    console.log('Wear a jacket!')

}

