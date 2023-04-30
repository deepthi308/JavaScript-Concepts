const deepthi = {
    firstName: 'Deepthi',
    lastName: 'Hariraman',
    birthYear: 2002,
    professionalStatus: 'Multi-Billionaire',
    friends: ['I', 'Me', 'Myself'],
    hasDriverLicense: true,
    calcAge: function () {
        // console.log(this);
        this.age = 2023 - this.birthYear;
        return (this.age);
    }
}

//  Any function that is attached to an object is called method.
// Objects can only contain function expression/arrow function. It cannot contain function declaration.

// Accessing the function inside the object
// 1. Using dot notation ---> to access members normally through the name of the properties.
// console.log(deepthi.calcAge(2002));

//  2. To access members after doing some computations on the property.
// console.log(deepthi['calcAge'](2002));

// this keyword ---> refers to the objects that is calling the method.

//Here, the object that is calling the method is deepthi.
// So, in this case this refers to the object deepthi
// So, inside function named calcAge, the this variable points to the object deepthi

// Instead of calling the function again and again to calculate the age.
// We can calculate the age by calling the function once and store age in the object itself inside a property called age.

console.log(deepthi);// object without age property
console.log(deepthi.calcAge());// age will be calculated and stored inside a property called age inside the object that called the function
console.log(deepthi);// object with age property