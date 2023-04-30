// Question 3:

/*
Create a method inside the object called getSummary. This method should return a summary about the particular objects based on the properties that already exist within the object.
*/

// Answer:

const deepthi = {
    firstName: 'Deepthi',
    lastName: 'Hariraman',
    birthYear: 2002,
    professionalStatus: 'Multi-Billionaire',
    friends: ['I', 'Me', 'Myself'],
    calcAge: function () {
        // console.log(this);
        this.age = 2023 - this.birthYear;
        return (this.age);
    },
    driverLicense: false,
}

// deepthi.calcAge();
// console.log(deepthi);

deepthi.getSummary = function () {
    const { firstName, lastName, birthYear, professionalStatus, friends, driverLicense} = this;
    this.summary = `${firstName} ${lastName} is a ${this.calcAge()} year alien came to this planet in the year of ${birthYear} and she ${driverLicense?`have driver's license.`:`does doesn't have driver's license`}`;
    return this.summary;
}

deepthi.getSummary();
console.log(deepthi);
console.log(deepthi.summary);

