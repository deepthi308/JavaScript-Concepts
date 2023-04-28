// Question 2:
/*
Use the BMI example from challenge #1, and the code you already wrote and improve it.

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "Jhon's BMI is higher than Mark's!

2. Use a template string to include the BMI values is the outputs. Example: "Mark's BMI(28.3) is higher than john's (23.9)!"

HINT: Use an if/else statement 😉.

Good Luck Myself 🤗
*/

// Assigning the values to the variables
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

// Calculating the BMI for both of them using those variables (mass in kg and height in meter)
const BMIMark = (massMark / (heightMark * heightMark)).toFixed(2);
const BMIJohn = (massJohn / (heightJohn ** 2)).toFixed(2);

// Checking who has the higher BMI
const isMarkHigher = BMIMark > BMIJohn;

// Controling the flow of the program based on the condition
if (isMarkHigher) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}) !`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}) !`);
}

console.log(`
Thank you for using this application. See you next time.`);


