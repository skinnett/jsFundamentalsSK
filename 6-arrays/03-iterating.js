let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hot Dog'];

// regular for loop

for (let i = 0; i < food.length; i++) {
    console.log(food[i])
}

// forEach()

food.forEach(function(foodItem) {
    console.log(foodItem)
})

// forEach() method - fat arrow function
food.forEach(foodItem => console.log(foodItem));

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hot Dog'];

for (let i = 0; i < food.length; i++) {
    listMyFood(food[i]);
}

function listMyFood(foodItem) {
    console.log(foodItem);
}

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hot Dog'];

// Look at MDN Doc for the forEach() methods
// Challenge: Include the optional Index parameter

food.forEach((foodItem, index) => console.log(foodItem, index)); // CBAF

food.forEach((foodItem, index) => {
    console.log(foodItem,index);
})  // BBAF

food.forEach(function(foodItem, index) {
    console.log(foodItem,index);
}) // fxn declaration


let movies = ['Ferris Bueller', 'Interstellar', 'Madagascar', 'The Breakfast Club'];

movies.push('Halloween');
movies.shift();
movies.unshift('Harry Potter');

movies.forEach((movies) => console.log(movies));

