// Truth value:
/*
Truthy value are not exacle true initally, but can be become false if we try to convert it to a boolean value
*/

// Values that are not falsy are the truthy values

// falsy values are
/*
1)---->0
2)---->''
3)---->undefined
4)---->NaN
5)---->null
*/

// Example:
let money = `1000000000000000000000000000000000000000$`;
money = 0;
if (money) {
    console.log(`You are a billionaire`);
} else {
    console.log(`You will become a billionaire in 2 years for sure 👸🏽`);
}