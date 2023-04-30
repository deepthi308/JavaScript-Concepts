// Food Processor is going to prepare juice
// For that it should cut the fruit
// So here the food processor is a function and this function will call another function to cut the fruit named cutter.

// Example 1:

function fruitCutter(fruit, quantity) {
    const pieces = quantity * 4;
    console.log(`${fruit} is cutted into ${pieces} pieces 🔪`);
    return pieces;
}

function mixy(fruit, pieces) {
    console.log(`Mixy is turned on`)
    console.log(`.\n.\n.`)
    const juice = `${fruit} juice `;
    console.log(`Mixy is turned off...juice ready 😀`)
    return ` ${fruit} juice `
}

function fruitProcessor(type, quantity, isSugar, glasses) {
    const cuttedFruits = fruitCutter(type, quantity);
    console.log(`${cuttedFruits} cutted pieces is put into the jar`)
    if (isSugar) {
        console.log('Sugar is added 🧂');
    }
    let juice = mixy(type, cuttedFruits);
    juice += (isSugar) ? 'with sugar' : 'without sugar';
    juice = `Please, take your ${glasses} glasses of 🥃` + juice+ ' 😋';
    return juice;
}

const myFavJuice = fruitProcessor('Apple', 1, true, 8);
console.log(myFavJuice);

// Example 2:

const calcAge = function (birthYear) {
    const presentYear = new Date().getFullYear();
    return presentYear - birthYear;
}

const retirementYearsLeft = function (birthYear, fullName) {
    const age = calcAge(birthYear);
    const retirementAge = parseInt(window.prompt('What is the retirement age in your country?'));
    const yearsLeft = retirementAge - age;
    return yearsLeft;
}

const fullName = 'Deepthi Hariraman';
const birthYear = 2002;
const yearsUntilRetirement = retirementYearsLeft(birthYear, fullName);

if (yearsUntilRetirement === 1) {
    console.log(`${yearsUntilRetirement} year left for your retirement`)
}
else if (yearsUntilRetirement > 0) {
        console.log(`${yearsUntilRetirement} years left for your retirement`)
    } else if(yearsUntilRetirement < 0){
    console.log(`Already retired before ${yearsUntilRetirement} years`);
} else{
    console.log('Retiring this year');
    }