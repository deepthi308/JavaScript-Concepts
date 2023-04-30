// Question 4:

/*
Let's go back to Mark and john comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass/height**2 = mass/(height*height).(mass in kg and height in meter).

1. For each of them, create an object with properties for their full name, mass, and height(Mark Miller and John Smith).
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects).
3. Log to the console who has the higher BMI, together with the full name and the respective BMI.
Example: 'John's BMI (28.3) is higher than Mark's (23.9)!'

Test Data: Marks weights 78 kg and is 1.69m tall.
John weights 92kg and is 1.95m tall.
*/

// Answer:

// Creating objects for both of them to group their properties and functionalities together
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = Number((this.mass / ((this.height) ** 2)).toFixed(0));
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = Number((this.mass / ((this.height) * (this.height))).toFixed(0));
        return this.bmi;
    }
};


function higherBmiChecker(bmi1, bmi2) {
    return `${(bmi1 > bmi2) ? `Mark's BMI (${bmi1}) is higher than John's (${bmi2})!` : `John's BMI (${bmi2}) is higher than Mark's (${bmi1})!`}`;
}

const result = higherBmiChecker(mark.calcBMI(), john.calcBMI());
console.log(result);
console.log(mark, john);