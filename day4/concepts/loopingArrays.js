// One of the major application of loops are  we can loop through the arrray. read the elements, modify  the elements and delete the elements of the array easily

// Example 1:
const deepthiFriends = ['I', 'Me', 'Myself'];
const deepthi = ['Deepthi', 'Hariraman', 2002, 2023 - 2002, 'Multi-Billionaire', deepthiFriends];
const types = [];

// instead of getting the  values  this way👇:
// console.log('-------Without Loop-------');
// console.log(deepthi[0]);
// console.log(deepthi[1]);
// console.log(deepthi[2]);
// console.log(deepthi[3]);
// console.log(deepthi[4]);
// console.log(deepthi[deepthi.length - 1]);

// With the help of loop we can do something like this👇:
console.log('-------With Loop-------');
for (let i = 0; i < deepthi.length; i++){
    if (typeof deepthi[i] === 'object') {
        for (let j = 0; j < deepthi[i].length; j++) {
            console.log(deepthi[i][j]);
        }
    } else {
        console.log(deepthi[i]);
    }
}
// console.log(deepthi[deepthi.length - 1], typeof deepthi[deepthi.length - 1]);

// Now lets push the types of  each elements of this array to a new empty array named types.
// So, that array will only consist of the datatypes of the elements that are present in this array.
// We are intializing the iterator with a value of 0 since arrays are zero index based.
for (let i = 0; i < deepthi.length; i++){
    // types.push(typeof deepthi[i]);
    types[i] = typeof deepthi[i]; // filling the types array
}

console.log(types);
let count = 0;
for (let i = 0; i < types.length; i++){
    if (types[i] !== 'string') {
        count = count + 1;
    }
}
console.log(count);

// Example 2:

// Given two arrays one filled with the birth years of the people and another empty array which needs to be filled with the ages of the people based on the years given in the years array.

const years = [1999, 2000, 2001, 2002];
const ages = [];

// Function to calculate the age
const calcAge = birthYear => 2023 - birthYear;

// Looping through the years array.
// Computing the age based on the year using the function calcAge
// Pushing the value age which is returned by the function inside the ages array
for (let i = 0; i < years.length; i++){
    let age = calcAge(years[i]);
    ages.push(age);
    ages[i] = age;
}

//Displaying the years and the age on to the console
console.log('Birth Years: ', years);
console.log('Ages: ', ages);




