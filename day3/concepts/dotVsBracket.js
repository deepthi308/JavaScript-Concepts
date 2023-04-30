const deepthi = {
    firstName: 'Deepthi',
    lastName: 'Hariraman',
    age: 2023 - 2002,
    professionalStatus: 'Multi-Billionaire',
    friends: ['I', 'Me', 'Myself']
}

console.log(deepthi);

// Accessing objects using dot notation (.)
// If we want to use the property name without any computation than we can use dot notation
// Dot notation looks clear and easy to use.

console.log(deepthi.age);

// Accessing objects using bracket notation (.)
// if we want to compute the property name then we have to use bracket notation

console.log(deepthi['age']);

const nameKey = 'Name'
console.log(deepthi['first' + nameKey]);
console.log(deepthi['last' + nameKey]);

const userOption = prompt('What do you want to know about deepthi? Choose between firstName, lastName, age, professionalStatus and friends');

console.log(deepthi[`${userOption ? userOption : 'professionalStatus'}`])

deepthi.location = 'Switzerland';
deepthi['github'] = 'deepthi308';
console.log(deepthi);



