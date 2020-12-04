/*
    PARAMETERS

    - parameters are placeholders for data that we pass into the function when the function is called
                    (1)
    function hello(name) {
        console.log(`hello ${name}`);
    }                         (2)  
              (3)   
    hello('Samuel');


    1) This is the parameter that the function is holding (a placeholder)
    2) by calling the parameter name, it will print the value given to 'name' when the function was called
    3) this is the data that we are passing into the function, and that the parameter 'name' will then hold

*/

function hello(name) {
    console.log(`hello ${name}`);
}

hello('Samuel');


function sam(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`)
}
sam('beer');




function counter(_number) {
    console.log(_number);
}
for (let i = 0; i <= 10; i++) {
//     console.log(i);
        counter(i)
}
counter()

// CHALLENGE: write a fxn which holds 2 parameters: first and last name

function name(first, last) {
    console.log(`Hello there ${first} ${last} how are you today?`);
}
name('Sam','Kinnett');    

