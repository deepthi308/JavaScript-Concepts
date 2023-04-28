// Person's info
const firstName = "Deepthi";
const lastName = "Hariraman";
const birthYear = 2002;

// Getting the fullname by concatenating the first name and the last name
const fullName = firstName + " " + lastName;

// Creating a function that takes the birth year as the parameter and returns the age(arrow function)
const calcAge = (birthYear=2002) => {
    const presentYear = new Date().getFullYear();
    return presentYear - birthYear;
}

// Introduction using normal concatenation using + operator
const introduction = "Hi, I am " + fullName + " a " + calcAge(2002) + " year old aspiring fullstack javascript developer"

// Displaying the introduction in the console
console.log(`Introduction using Concatenation Operator 👇😐`);
console.log(introduction);

// However, Using "+" operator for concatenation is hard. Since, we have manage the spaces properly while concatenating.

// Here comes the Template Literals(``) 🤩....

// To understand the usage of template literals lets create a new introduction variable
const newIntroduction = `Hi, I am ${fullName} a ${calcAge(birthYear)} year old aspiring fullstack javascript developer`;

// Displaying the new introduction in the console
console.log(`New Introduction using Template Literals 👇😃`)
console.log(newIntroduction);

// We also don't have to add to add new line when we are using template literals
console.log(`Hi, I am ${fullName}.
I will become a billionaire in future`);

// Eventhough, if two of them looks similar in the console using template literals made our time easier by saving our time.






