// Equality operators are used to check whether the values that we are comparing are equal.
// Similar to the comparison operators. This operator will also return boolean value either true or false.

const age = "18";

// Alse if the for block has only one line of statement inside of it. Then we can ignore the usage of curly braces.
if (age === 18) console.log("You just became an adult 🤠(strict)");
if (age == 18) console.log("You just became an adult 🤠(loose)");

// Difference between strict and loose equality operators
// Strict equality operator ---> ===
// Loose equality operator ---> ==

// ------------Strict Equality Operator-------------//
// Check for both the value as well as the type of the value
console.log("18" === "18");//Returns true
console.log("10" === 10);//Returns false

// ------------Loose Equality Operators-------------//
// Check only if the values that we are comparing are equal or not
console.log("10" == "10");//Returns true
console.log("10" == 10);//Returns fals8e

const favorite = Number(prompt("What's your favourite number?"));
console.log(favorite, typeof favorite);

// whatever, we write inside the prompt will be string eventhough if you enter a number.
// So, if we check the values using strict equality operator it will return false.
// However, if we check the values using loose equality operator it will check only for value and not for type.
// So, the loose eqaulity operator will return true;

if (favorite === 8) {
    console.log(`Cool! 8 is an amazing number (strict)`);
} else if(favorite == 8) {
    console.log(`8 is a Nice number (loose)`);
} else {
    console.log(`I like that number too...😊`);
}

// 🟡 Important thing is loose equality operator have done type coercion to match both the values
// loose eqaulity operator converted the string to number to match the values which is type coercion

// 🟡 But In strict equality operator javascript won't perform type coecion behind the scenes.