// Spread operator  is used to copy the  elements of one array to another array.

const restaurantMenu = [['idli', 'dhosai', 'poori', 'chappathi', 'vadai'],['briyani', 'chicken', 'tandhoori', 'noodles', 'pachidi']]


// In this case we are mannually acessing the elements of the array and putting inside another array
const arr = [1, 2, 3];
const badNewArr = [arr[0], arr[1], arr[2], 4, 5];
console.log(badNewArr);

// Using spread operator
// Using spread operatorvis like taking the elements out of the array and writing them manually
const goodNewArr = [...arr, 4, 5];
console.log(goodNewArr);
const copyingElementsOfThreeArrrays = [...goodNewArr, ...arr, ...badNewArr];
console.log(copyingElementsOfThreeArrrays);
console.log(...copyingElementsOfThreeArrrays);

const newMenu = [...restaurantMenu[0],...restaurantMenu[1]];
console.log(newMenu);

// Copying the elements of one array to another
const newMenuCopy = [...newMenu];

// Join two array
const dishes = ['Vengaaya Dhosa, Thayir Saadham', 'Keera Saadham', 'Gobi Manjurian'];
const drinks = ['Grape Juice', 'Orange Juice', 'Watermelon Juice'];
const mainMenu = [...dishes, ...drinks];

console.log(mainMenu);

// Iterables  are arrays, strings, maps, sets. Not objects.
const str = 'Deepthi';
const letters = [...str];
console.log(letters);
console.log(...str);
console.log(`${[...str]}`);

function orderPasta(ing1,ing2,ing3) {
    console.log(`Pasta ready with ${ing1}, ${ing2} and ${ing3} 😄`);
}
const ingredients = ['Keerai','Carrot','Gose'];
// for (let i = 0; i < 3; i++){
//     const ing = prompt(`Enter the ingredient ${i + 1}`);
//     ingredients.push(ing);
// }
// ingredients = [prompt('Enter the ingredient 1'),prompt('Enter the ingredient 2'),prompt('Enter the ingredient 3')]
orderPasta(...ingredients);

const deepthi = {
    fullName: 'Deepthi Hariraman',
    birthYear: 2002,
    calcAge: function () {
        this.age = new Date().getFullYear() - this.birthYear;
        return this.age;
    },
    status:'Multi-Billionaire'
}

const praveen = {
    fullName: 'Praveen Hariraman',
    birthYear: 1999,
    calcAge: function () {
        this.age = new Date().getFullYear() - this.birthYear;
        return this.age;
    },
    status:'Multi-Billionaire'
}

deepthi.calcAge();
praveen.calcAge();
console.log({ ...deepthi, ...praveen });

const newBillionaires = { deepthi, praveen };
console.log({...newBillionaires,deepthi:{...deepthi,fullName:'Deepthi Hariraman'}});






