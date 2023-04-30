//Arrays
// Why arrays

const friend1 = 'Deepthi1';
const friend2 = 'Deepthi2';
const friend3 = 'Deepthi3';

// If we want to store n number of name we have to create n number of variables to store.
// But with the help of arrays we can able to store in a single variable.
// Using arrays we can bundle all of these values together into some bigger container.
// Since, programming is all about data. We get data from somewhere and we have to store it somewhere.
// These data structure like arrays helps us to store the data and process the data in an efficient way.
// The  two most important data structure in javascript are arrays and objects
// Now, lets see about arrays.

const friends = ['Deepthi1', 'Deepthi2', 'Deepthi3'];
console.log(friends);

const years = [1999, 2000, 2002];
console.log(years);

// another way to create arrays
const fruits = new Array('water melon', 'orange', 'apple');
console.log(fruits);

// We can access the elements of their array using their indexes. The first element will be at the index of 0, because array is 0 index based.
// The length of the array will always be 1 greater than the indexes of the array. As the length is not 0 based and gives the actual number of elements in the array.

// Accessing the elements of the array
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);// returns unndefined  as there is no 3rd index in the array

// Length of the array using length property of the array to find the actual number of elements present in  the array.
console.log(`The fruits array has ${fruits.length} elements`);

// To retrive the last elements of the array
console.log(`The last element of the fruits array is ${fruits[fruits.length - 1]}`);

// We can also update an element or mutate the element
console.log(`Before mutation: `);
console.log(fruits);
fruits[1] = 'mango'
console.log(`After mutation: `);//orange will be changed to mango
console.log(fruits);

// But const variables are immutable. But not all const are immutable only primitives are immutable. since array is an object so the elements of  the array is mutable even though the array is declared as constant(const).
// but however, we cannot mutate the entire array. by assigning the array a new array.

// fruits = ['grape', 'strawberry', 'dragon fruit'];
//This above practice of assigning a new array to an array that is declared as constant will result in error that says 'assignment to a constant variable'.

// each element in an array can also be an expression that returns value instead of directly assigning the value.

//We can do something like this
const firstName = 'Jonas';
const age = 2023 - 1991;

const personalInfo = [firstName, age, 2023 - age];
console.log(personalInfo);

// We can also put another array as an element inside of an array.
// Now lets put friends array inside personalInfo array.

personalInfo[personalInfo.length] = friends;
console.log(personalInfo);

// lets find the length of personalInfo along with the length of its internal array that we added in the last.
console.log(personalInfo.length);
console.log(personalInfo[personalInfo.length-1].length);

// *************Exercise**********************

// Given the birth year of the people create a calcAge function which takes these year as parameter, calculate the age and returns the age.
//The ages  that are returned by the function should be stored in a seperate array.
// const _years = [1999, 2000, 2001, 2002, 2003];

const calcAge = function (year) {
    const presentYear = new Date().getFullYear();
    return (presentYear - year);
}

const _years = [1999, 2000, 2001, 2002, 2003];
let ages = [];

console.log(calcAge(_years));//returns NaN(Not a Number) as the calcAge function expects only one value as parameter and we pass an entire array to it and when the function tries to subtract the year with the array it will return NaN.
// Instead we can pass a particular element of the array as parameter and it works fine.

const age1 = calcAge(_years[0]);//returned value will replace the fuction call and assign itself to this age1 variable
const age2 = calcAge(_years[1]);
const age3 = calcAge(_years[2]);
const age4 = calcAge(_years[3]);
const age5 = calcAge(_years[_years.length-1]);
console.log(age1);
console.log(age2);
console.log(age3);
console.log(age4);
console.log(age5);

// Since the function call itself is an expression that returns value. We can directly place the function call as an element of the array.
// Javascript then compute the value and assign to the array. Lets see that in action
ages = [calcAge(_years[0]), calcAge(_years[1]), calcAge(_years[2]), calcAge(_years[3]), calcAge(_years[_years.length - 1])];
console.log(ages);




