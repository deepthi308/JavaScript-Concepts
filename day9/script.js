'use strict'

function calcAge(birthYear) {
    const age = 2023 - birthYear;
    firstName = "Someother";
    function printAge() {
        const output = `I am ${firstName} born in ${birthYear} and My age is ${age}`;
        console.log(age);

        if (birthYear >= 2000 && birthYear <= 2023) {
            var str = `${firstName} You are a 2k kid who is born in ${birthYear} and having the age of ${age}` 

            function add(a, b) {
                return a + b;
            }
        }

        console.log(str);
        // console.log(add(2, 3));

    }

    printAge();
    return age;
}

let firstName = "Deepthi";//Executed inside global execution context which is inside the call stack
console.log(firstName);
console.log(calcAge(2002));
console.log(firstName);
// console.log(age);