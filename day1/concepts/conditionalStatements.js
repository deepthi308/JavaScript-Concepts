// Conditional statements helps us to make decisions based on the condition.
// Using conditional statements we can do something like
/*
if that condition passed do that
if this condition passed do this
if none of the conditions were passed do this*/

// Let's take a look at how we do that via code

// If a person is older than 18, he can apply for driving licence. If he is below 18 he should not apply for driving licence.

// Setting up the variables
const licensableAge = 18;
const age = 15;

// Checking whether the age is greater or equal to the licensable age
const isOldEnough = age >= licensableAge;// Returns boolean value

// Controlling the execution of the program based on the conditions
if (isOldEnough) {
    console.log(`You can get your driving license 🚗...`); 
} else {
    const yearsLeft = licensableAge - age + " years left"
    console.log(`You still have ${yearsLeft} to get your license 🚌...`); 
}
// console.log("\n");

// -------------------------------------------------//

// Instead of statically assigning the value to the age
// Why can't we get the user input from the prompt
// The input that we write inside the prompt will always be stored as a string.
// So, Inorder to covert the string into integer as it is a age. We need to parse the value into integer and then we should store it.

const userInputString = window.prompt("Please, Enter your age.")
console.log(typeof userInputString);

const parsedUserInput = parseInt(userInputString);
// const parsedUserInput = Number(userInputString);
console.log(typeof parsedUserInput);

if (parsedUserInput >= licensableAge) {
    console.log(`You can get your driving license 🚗...`); 
} else {
    const yearsLeft = licensableAge - age + " years left"
    console.log(`You still have ${yearsLeft} to get your license 🚌...`); 
}

// ----------------------------------------------//

const fullName = 'Deepthi Hariraman';
const birthYear = 2002;
let century;

if (birthYear <= 2000) {
    century = 20+'th';
} else {
    century = 21+'st';
}

console.log(`${fullName} is born in the ${century}  century.`);

// ---------------------------------------------------//
