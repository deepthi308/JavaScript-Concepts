const question = new Map([['question', 'What is the best programming language in the world?'],
[1,'C'],
[2,'C++'],
[3,'JS'],
[4,'Python'],
['correct',3],
[true,'Correct 🎉'],
[false,'Try again! 🤠'],
]);

console.log(question);
// const answer = prompt(`${question.get('question')}
// a) ${question.get(1)}
// b) ${question.get(2)}
// c) ${question.get(3)}
// d) ${question.get(4)}`
// );

// console.log(`${answer.toUpperCase() === question.get(3) ? question.get(true) : question.get(false)}`);

// We can also convert an object using the  Object.entries method and pass in the object inorder to convert the object into array and create a new map with that array

const demoObj = {
    fullName: 'Deepthi Hariraman',
    birthYear: 2002,
    calcAge: function(){
        this.age = new Date().getFullYear - this.birthYear;
        return this.age;
    },
    status: 'Multi-Millionaire',
    respect: 'Increased',
    sigmaFemale : true
}

const deepthiHariraman = new Map(Object.entries(demoObj));

// Map are also iterable since it is not a primitive datatype

console.log('---------------------------------');

// To get both the  key as well as values
for (const [key, value] of deepthiHariraman.entries()) {
    console.log(`${key} : ${value}`);
}

console.log('---------------------------------');


// To only get the values from the map
for (const value of deepthiHariraman.values()) {
    console.log(`The value is ${value}`); 
}

console.log('---------------------------------');

// To only get the keys from the map
for (const key of deepthiHariraman.keys()) {
    console.log(`The key is ${key}`);
}

console.log('---------------------------------');

// console.log(question)
console.log(`1. ${question.get('question')}`);
console.log(`The options are:`);
for (const [key, value] of question) {
    typeof key === 'number' && console.log(`${key}: ${value}`);
}

let answer;

// answer = Number(prompt('Enter your option')); 
answer = 3;

answer === question.get('correct') ? console.log(question.get(true)) : console.log(question.get(false));

// Convert map into array
console.log(...deepthiHariraman);

// If we want to unpack the elements of the array and put it inside of another array we can create an array and use the spread operator to unpack the elements of the map inside the array
console.log([...deepthiHariraman]);
console.log([...deepthiHariraman.keys()]);
console.log([...deepthiHariraman.values()]);
console.log([...deepthiHariraman.entries()]);







