//We have already seen two conditional statements to control the execution of the program.
//We also have conditional operator which helps us in doing the same thing all in one like.

// Conditional Operator (?:)
// This operator is also known as ternary operator. As it consists of three parts or operands
//Since  this is an expression this should return a value
// operator always produces value, that is operator is an expression
// It is similar  is if else statements
// Here, else part is  mandatory

// Example:
const age = 21;

(age >= 18) ? console.log('You are an adult') : console.log('You are a teenager');

// In the above case its not returning any values but just printing on to the console.
// But, usually this expression should and will return value as given in the example below.
// We use this operator to assign values based on a condition

const drink = (age >= 18) ? 'Biriyani with chicken lolipop' : 'Samosa with chenna masala';

// The above expression using conditional operator will return value based on the condition and that value will then be assigned to the  variable drink.
// Lets console log to see what is stored in the variable

console.log(drink);//returns Biriyani with chicken lolipop
// since the condition is satisfied the first values is returned to the variable.

//Same Example using if statemens
let drink2;
if (age >= 18) {
    drink2 = 'Biriyani with chicken lolipop';
} else {
    drink2 = 'Samosa with chenna masala';
}

// We can also do something like this as given below
console.log(`I like to drink ${(age >= 18) ? 'Biriyani with chicken lolipop' : 'Samosa with chenna masala'}`);

// Ternary operator is not a replacement to if statements. We still need if statement. However, ternary operator will be helpfull in the cases where we need to take quick decisions.
