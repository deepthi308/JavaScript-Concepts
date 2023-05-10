// For of loops:

const starterMenu = ['Watermelon Juice','Fruit  Salad',  'vegetable Soup', 'Vannila Icecream'];
const mainMenu = ['Briyani', 'Noodles', 'Friedrice', 'Chicken Lolipop'];

const menu = [...starterMenu, ...mainMenu];

// for (const item of menu.entries()){
//     // console.log(item);
//     console.log(`${item[0]+1} ${item[1]}`)
// }

for (const [index, element] of menu.entries()) {
    console.log(`${index + 1}: ${element}`);
}

// console.log([...menu.entries()]);
// if we use the entries method on the array. It will return the iterator which consist of the elements of the array along with their index

