// Question 1:

/*
Given an array of forcasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print '...17°C in 1 days ... 21°C in 2 days ...23°C in 3 days ...'

Create a function 'printForcast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test Data 1: [17, 21, 23]
Test Data 2: [12, 5, -5, 0, 4]
*/

// Problem solving framework:
/*
1. Understand the problem by asking yourself right questions. If you don't find answe by yourself don't be afraid to ask yourself right questions.
Array transformed to string by
What is the X days? index+1
2. Break the problem into sub problems to make the work easier.
Transform array into string
Transform each element to string with °C
String needs to contain index + 1
*/

// Answer:

function printForcast(temperatures) {
    let message = '';
    for (let i = 0; i < temperatures.length; i++){
        message += '...' + temperatures[i] + `°C in ${i + 1} days `;
        if(i === temperatures.length-1) message += '...'
    }
    console.log(message);
}

const temperatures1 = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

printForcast(temperatures1);
// O/P: ...17°C in 1 days ...21°C in 2 days ...23°C in 3 days ...days ... 
printForcast(temperatures2);
// O/P: ...12°C in 1 days ...5°C in 2 days ...-5°C in 3 days ...0°C in 4 days ...4°C in 5 days ...