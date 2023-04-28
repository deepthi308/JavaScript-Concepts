// Logical operators
// Used to combine two or more conditions and make decision based on the result
// This operators also returns boolean values
// There are three types of logical operators
// AND ---> Returns true if all the conditions are true
// OR ---> Returns true if any one of the condition is true
// NOR ---> Return the opposite of the boolean value returned by the condition


const iLikeThis = true;
const iLikeThat = false;

console.log(`AND : ${iLikeThis && iLikeThat}`);//Returns true if both of the conditions are true

console.log(`OR : ${iLikeThis || iLikeThat}`);//Returns true if any one of the conditions are true

console.log(`NOT : ${!(iLikeThat)}`);//Return the opposite boolean value of whatever returned by the condition

// Example 1
const hasDriverLicense = true;
const hasGoodVision = false;

const canDrive = hasDriverLicense && hasGoodVision;

if (canDrive) {
    console.log(`You can drive`);
} else {
    {
    console.log(`Someone else should drive`)
    }
}

// Example 2

const iLikeSamose = true;
const iHaveMoney = true;

if (iLikeSamose && iHaveMoney) {
    console.log("Take your grape icecream 🍨😋");
} else {
    console.log("Get money from parents and come 😊");
}

// Example 3

const markTenth = 470;
const donation = 10_000;

if (markTenth > 400 || donation > 20_000) {
    console.log("Take your seat 🏫");
} else {
    console.log("Search for someother institutes 😊");
}

// Example 4
const hasSkills = false;
const clearedInterview = false;
const scoreOutOfTen = 7;

if (hasSkills && clearedInterview && scoreOutOfTen>8) {
    console.log("Welcome to google...");
} else if(hasSkills && (!(clearedInterview) && !(scoreOutOfTen>8))){
    console.log("Work even more harder and crack it next time");
} else {
    console.log("I believe in you. You can do it for sure.")
}

// Example 5
const saraHasLicence = true;
const saraHasVision = true;
const saraIsTired = false;

if (saraHasLicence && saraHasVision && !(saraIsTired)) {
    console.log("Sara will drive");
} else if (saraHasLicence && saraHasVision && saraIsTired) {
    console.log("Sara should take rest")
} else if (!(saraHasLicence) && saraHasVision && !(saraIsTired)) {
    console.log("I will drive");
} else {
    console.log("Lets quit this plan");
}