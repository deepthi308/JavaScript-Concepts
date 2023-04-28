// Question 1:
/*
Mark and john are trying to  compare their BMI, which is calculated using the formula:BMI=mass/height**2=mass/(height*height). mass in kg and height in meter.
*/

// Store mark's and johns mass and height in variables
// Calculate the BMI's using using the formula given
// Create a boolean variable "markHigherBMI" containing the information about whther mark has heigher BMI than john

// Test Data 1: Mark weight is 78kg and he is 1.69m tall.
// john weights 92kg and is 1.95m tall.
// Test Data 2: Mark weights 95kg and he is 1.88m tall.
// john weights 85kg and 1.76m tall.

// Answer:

// Mark's info
const massMark = 95; //in kg
const heightMark = 1.88; //in m

// John's info
const massJohn = 85; //in kg
const heightJohn = 1.76; //in m

// Calculating their BMI's
const BMIMark = (massMark / (heightMark ** 2)).toFixed(2);
const BMIJohn = (massJohn / (heightJohn * heightJohn)).toFixed(2);

// Displaying the values on the console
console.log(`Mark's BMI : ${BMIMark}\nJohn's BMI : ${BMIJohn}`);

// Checking whether Mark's BMI is heigher than john or not
const markHigherBMI = BMIMark > BMIJohn;

// Displaying the result using ternary operator(3 operands will be there)
markHigherBMI ? console.log("Mark has heigher BMI of " + BMIMark) : console.log("John has heigher BMI of " + BMIJohn);

// Completed challenge 1 😎!!


