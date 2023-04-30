const person1 = [
    'Deepthi',
    'Hariraman',
    2023 - 2002,
    'Multi-Billionaire',
    ['I', 'Me', 'Myself']
];

// The drawback of array is there is no way we can give this element a name like firstName : 'Deepthi', lastName : 'Hariraman' and so on.
// So we cannot reference them by name but only by their index or order number in which they appear in the array.

// The overcome this problem of array we have another datastructure in javascript called object.
// In objects we can actually define key value pairs.
// So then we can give each of these values a name.
// key ---> variable name
// value ---> value that is stored inside the variable

const deepthi = {
    firstName: 'Deepthi',
    lastName: 'Hariraman',
    birthYear: 2023 - 2002,
    professionalStatus: 'Multi-Billionaire',
    friends: ['I', 'Me', 'Myself']
}// The curly braces actually creates a new object
// There are many ways to create an object.
// However, using curly braces is the simplest way among all. This is called object literal syntax
// Because, we are literally writing down the entire object content.
// This object has 5 key which is also said to be as property act as a variable to store the value that is present on the right side of the key.
// We can acess the values of the object using their keys/properties.
// Just like arrays, we use objects to group together different variables that really belong together.
// Here, order doesn't matter as arrays.
// We use arrays if we want to store ordered data and objects are used to store unstructured data.

// We can also create objects this way as mentioned below.
const person = new Object({firstName : 'Deepthi', lastName : 'Hariraman'});
console.log(person);
