/*
- Loops offer us a quick and easy way to do something repeatedly, or Loop over something

- there are many different kinds of Loops, but they all do roughtly the same thing:
    - the loop will repeat until a specified condition evaluates to false

        1) for Loop
        2) do While Loop
        3) while Loop
        4) for in
        5) for of


        - for loop takes in 3 parameters
        1. initial expression
        2. condition
        3. increment expression

        * SEPERATED BY SEMICOLON *
*/
// i += i + 1
// for (let i = 0; i < 10; i++) { 
//     console.log(i);
// } 

for (let i = 0; i <= 20; i+=2) {
    console.log(i);
}

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

/*
    1. Set Variable 
    2. Condition to be met. Loop until false
    3. Body of the for loop: code to be ran as long as condition is true
    4. incrementer: the number in which we want to increase the value of our variable by

    - these steps will continue to repeat until the condition is false
*/

for (let i = 0; i >= -24; i -= 2) {
    console.log(i)
}

let name = 'Samuel'

for (let num = 0; num < name.length; num++) {
    console.log(name.charAt(num));
}

let sum = 0;//

for (let i = 1; i <= 50; i++) {
    sum += i;
    console.log(sum);
}

