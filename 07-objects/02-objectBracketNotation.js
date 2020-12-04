/*
    OBJECT BRACKET NOTATION

    - OBN can be used with obejects to extract values like we do with arrays
    - object bracket notation can be useful if we want to store and reference
    new keys in an obejct

    - all keys in an object are strings
*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

// keys in an object are strings, even though we dont need to explicitly wrap them in ''

let test = Object.keys(garden);
    console.log(test);

    console.log(typeof test[4]);

let zucchini = garden['vegetable']

    console.log(zucchini)

    let baking = {};
    baking['zucchini'] = 'better make some bread';
    console.log(baking);



    let garden = {
        vegetable: 'zucchini',
        flower: 'sunflower',
        fruit: 'grape',
        water: true,
        sun: true,
        size: 10
    }
    
    
    let baking = {};
    baking['zucchini'] = 'better make some bread';
    console.log(baking);

    console.log(baking[garden['vegetable']]);  // imagine it as a mathematical fxn


// using square bracket is a good idea when you cant use dot notation 

let testObj = {
    'Spaces Here': true,
    noSpaces: true
}

console.log(testObj["Spaces Here"]);