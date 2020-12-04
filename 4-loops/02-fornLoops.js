/* 
    For In Loops

    - Great for iterationg over values in an object.  
    - Properties in an object are what are known as enumerable properties. (countable)
        - For In Loops iterate over an objects enumerable properties
*/

// Objects hold what are called key/value pairs


let student = {
//   key   value        - Values are assigneed with a COLON not a =
    name: 'Peter', 
    awesome: true,
    degree: 'JavaScript',
    week: 1
}

for (let _item in student) {
    console.log(_item)          //  gives the key
    console.log(student[_item]) //  gives the value of the keys
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'slash', 'rag doll']

for (let _cat in catArray) {
    console.log(_cat)            // gives the index
    console.log(catArray[_cat]) // gives the value of the index
}

let name = 'sAmUEl';

for (let _Uppername in name) {
    console.log(name[0].toUpperCase() + name.slice(1,6).toLowerCase())
}

let name = 'SAmUEl'
let capName;

for (let index in name) {    // gives the indexes of name variables
    if (index == 0) {
        capName = name[index].toUpperCase();
    } else {
        capName += name[index].toLowerCase();
    }
}