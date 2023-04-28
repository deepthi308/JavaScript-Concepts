// TypeConversion:
// Explicitly converting to a particular type that we want
// TypeCoercion:
// Implicitly converted automatically by javascript

// ---------------Type Conversion---------------------//
let year = '1991';//Here we assigned an integer but in the form of string
console.log(typeof year);//Return string

// When, we try to add this string with an integer.
// The whole value will be converted into string
console.log(year + 18);
// The above expression won't return 2009 by considering it as integers. Instead it consider it as a string and concatenates both the value and return -->199118
console.log(typeof (year + 18));

// To solve this problem we needvto convert  the year to number using explicit type conversion
year = Number(year);
// We have converted and assigned to the same variable. Now, Lets check the type of the year
console.log(typeof year);//This expression returns number

// Now lets try to perform the addition again
console.log(year + 18, typeof (year + 18));

// But, what happen if we try to convert an actual string into a number. Would that work?

const _name = "Some Name";
console.log(Number(_name));//returns NaN(Not a Number)
// NaN is actually a type number. However, it is not valid number.

// Now lets do the other way around by trying to convert a number to a sting
console.log( String(23), 23);
console.log(typeof String(23), typeof 23);//Returns string

// -------------Type Coercion---------------------------//
// Type coercion occurs whenever javascript deals with two values that are of different types.
// Here javascript convert one of the values to other values to match both the values behind the scenes implicitly.
// So, that the operation can be executed.

// If we think about it. We have seen type coersion happening several times before
const introduction = `I am Deepthi Hariraman a ${23} year old aspring fullstack web developer`;
console.log(introduction, typeof introduction);
// Here eventhough the above introduction has an integer in it. Javascript is converting the integer to string to make sure all the values are of the same type.

// Examples of type coercion:
console.log("Hi I am " + 21 + " years old");//converts and returns string
console.log("21" + "10" + 10);//converts and returns string
console.log("20" - "10" - 2);//returns a number (8)
console.log("20" - "10" + "2");//returns string "102"
// "20"-"10"=10
// 10+"2"="102"


