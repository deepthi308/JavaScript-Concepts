// Question 1:

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is  20%.

1. Write a function 'calcTip' that takes any bill values as an input and returns the corresponding tip, calculated based on the rules above (You can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + top.

TEST DATA: 125, 555 and 44.
*/

// Fuction expression - this not supported
const calcTip = function (bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * (15 / 100);
        return tip
    } else {
        tip = bill * (20 / 100);
        return tip;
    }
}

// Just testing the function with the bill value of 100.
console.log(calcTip(100));// Prints 15 on the console

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])]

console.log('Bills👇:')
console.log(bills);

console.log('Tips👇:')
console.log(tips);

const hotel1 = bills[0] + tips[0];
const hotel2 = bills[1] + tips[1];
const hotel3 = bills[2] + tips[2];

const total = [hotel1, hotel2, hotel3];
console.log('Total👇:')
console.log(total);