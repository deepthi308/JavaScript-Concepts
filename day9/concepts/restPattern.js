// Rest Pattern

const hotel = [
    ['Pizza', 'Burger', 'Sandwich', 'Pepsi'],
    ['Briyani', 'Fried Rice', 'Noodles', 'veg-Meals'],
    ['Chenna-Masala', 'Samosa', 'Paani-Poori', 'Puffs'],
    ['Orange-Juice', 'Grape-Juice', 'Apple-Juice', 'Watermelon-Juice']
];

// Spread  operator & Rest Pattern Difference
// Spread operator is used to unpack the elements of the array
// Rest Pattern is used to pack the elements of the array --> Opposite of spread operator

// Spead operator
// Here we are using spread operator.
// Because we are using the three dots on the right hand side of  the assignment operator.
const array = [1, 2, 3, ...[4, 5, 6, 7, ...[8, 9, 10]]];
console.log(array);

// Rest pattern in arrays:
// It is called rest because it takes the remaining elements of the array and put it inside the new array

const [a,b,...others] = array;
console.log(others);
console.log(a, b);

const [fastFood, Lunch, , ...remaining] = hotel;
console.log(remaining);

const [juice1, ...juices] = hotel[3];
console.log(juice1, juices);

// Rest pattern in objects
//Here, it takes the remaining elements of the array and put it inside the a object

const aliens = {
   exampleObj1 : {
    fullName: 'Unknown1',
    planet: 'Moon',
    type: 'Alien',
    status:'Not-found',
    },
    exampleObj2 :{
    fullName: 'Unknown2',
    planet: 'Moon',
    type: 'Alien',
    status:'Not-found',
    },
    exampleObj3 : {
    fullName: 'Unknown3',
    planet: 'Moon',
    type: 'Alien',
    status:'Not-found',
    },
    exampleObj4 : {
    fullName: 'Unknown4',
    planet: 'Moon',
    type: 'Alien',
    status:'Not-found',
    },
    exampleObj5 : {
    fullName: 'Unknown5',
    planet: 'Moon',
    type: 'Alien',
    status:'Not-found',
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(otherIngredients)
        let str = `Pizza made with ${mainIngredient} `
        for (let i = 0; i < otherIngredients.length; i++){
        if (i === otherIngredients.length-1) {
                str+=`and ${otherIngredients[otherIngredients.length-1]}.`
        } else {
                str+=`${otherIngredients[i]} `
        }
        }
        return str;

    }
}

// Spread operator
const object = {...aliens};
console.log(object);

// Rest Pattern
const { exampleObj1, exampleObj2, ...otherObjs } = aliens;
console.log(exampleObj1);
console.log(exampleObj2);
console.log(otherObjs);

// Functions using spread operator
const juiceProcessor1 = () => {  }

// Functions using rest pattern
const add = (...ingredients) => {
   let sum = 0;
    ingredients.forEach((ingredient) => {
        sum = sum + ingredient;
    })
    return sum;
}

console.log(add(1, 2, 3, 4, 5));
const values = [1, 2, 3, 4, 5, 6];
console.log(add(...values));

console.log(aliens.orderPizza('Onion', 'Cheese', 'Pepperoni', 'Carrot', 'Mushroom'));

// Conclusion ---> The spread and rest both look exactly the same way but  they work in opposite direction

// Spread opperator is used in the right side of the assignment opperator to unpack an array or object

// Rest pattern is used in the left side of the assignment opperator to pack the remaining elements into a seperate array or object
