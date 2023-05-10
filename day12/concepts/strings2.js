// Strings

const airLine = 'TAP Air Portugal';
const plane = 'A320';

console.log(airLine.toLowerCase());// Transforms the  string to lower case
console.log(airLine.toUpperCase());// Transforms the string to upper case
// We can also call this method directly on the string as given below
console.log('Deepthi Hariraman'.toUpperCase());

// Function to fix capitalization in the name

const capitalizationFixer = (text) => {
    let string = text.trim().toLowerCase().split(' ');
    // console.log(string);
    let fixedString = []
    for (const word of string) {
        const correctWord = word[0].toUpperCase() + word.slice(1);
        // console.log(correctWord);
        fixedString.push(correctWord);
    }

    return fixedString.join(' ');
}

const passenger = 'dEEpthi HariRaman';
const properName = capitalizationFixer(passenger);
console.log(properName);

console.log(capitalizationFixer('VivekaNANDHA ViDHYAlaya, VeeRapURAM'));

// function to compare the email
const compareEmail = function (email,loginEmail) {
    if (loginEmail.trim().toLowerCase() === email) {
        console.log('Sign in Successful 😊');
    } else {
        console.log('Redirect to sign up page ⬅');  
    }
}

const email = 'dhenskript@dhenskript.com';
// const loginEmail = prompt('Enter your email');
compareEmail(email, 'dhenskript@dhenskript.com');

// There is also trimStart() and trimEnd() method since ES2019 so we can trim the white spaces at a particular side of string

// Replace method
const priceGB = '188,24 £'
console.log(priceGB);
const priceUS = priceGB.replace('£', '$').replace(',','.')
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!'

console.log(announcement.replace('door', 'gate'));
// replace only the first occurance of the string that we passed in with the  string  we passed to replace this with

console.log(announcement.replaceAll('door', 'gate'));

// We can also use regular expression to replace all the occurances of the string
console.log(announcement.replaceAll(/door/g, 'gate'));

