// Array Destructuring:
// Use square brackets to destructure

const array1 = [1, 2, 2, 3, 3, 3];

const array2 = new Array(1, 2, 3,4);

console.log(array1, array2);

// console.log(...array1);

const [index1, index2,,index4] = array2; 
console.log(index1,index2,index4)

