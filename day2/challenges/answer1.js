//Question 1

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in the resturant. In his country, It's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement (If it is easier for you, you can start with an if/else statement and convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value(bill+tip).
Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

Test Data: Test for bill values 275, 40 and 430
*/

// Answer:

const bill = 430;
const tip = (bill >= 50 && bill <= 300) ? bill*(15 / 100) : bill*(20 / 100);
const total = bill + tip;

console.log(`Bill: ${bill}
Tip: ${tip}
Final Value: ${total}`);

// Output
/*

1) if bill = 275

Bill: 275
Tip: 41.25
Final Value: 316.25

2) if bill = 40

Bill: 40
Tip: 8
Final Value: 48

3) if bill = 430

Bill: 430
Tip: 86
Final Value: 516

*/
