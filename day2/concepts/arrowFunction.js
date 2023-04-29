//Arrow Function
/*
This type of function came in the ES6/ES2015 version of  javascript

Syntax:
const arrowFunc = (parameter) => {//body goes  here...}
*/

// Example 1:

const calculator = (operation, ...values) => {
    let result;
    switch (operation) {
        case '+':
            // console.log(values.length)
            result = 0;
            for (let i = 0; i < values.length; i++){
                result += values[i];
            }
            break;
        case '-':
           result = values[0]-values[1];
            break;
        case '*':
             result = 1;
            for (let i = 0; i < values.length; i++){
                result *= values[i];
            }
            break;
        case '/':
             result = values[0]/values[1];
            break;
        case '%':
            result = values[0]%values[1];
            break;
        default:
            result = 'Enter a valid operation'
            break;
    }
    return result
}

console.log(calculator('+', 5, 5, 10));

// Example 2:

const calcAge = (birthYear) => {
    let presentYear = new Date().getFullYear();
    return presentYear - birthYear;
}

const yearUntilRetirement = (age,retirementAge) => {
    return retirementAge - age;
}

const myAge = calcAge(2002);
const willRetireIn = yearUntilRetirement(myAge, 65);

console.log(`My current age is ${myAge} and ${willRetireIn} years are left for my retirement`);