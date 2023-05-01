// Question 1:

/*
Copy the question from part-6 video of the  complete javascript course 2023.
Time stamp: 59:00 🤠
*/

// Answer:

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * (15 / 100) : bill * (20 / 100);
}

const calcAverage = (totals) => {
    let sum = 0;
    let noOfElements = totals.length;
    for (let i = 0; i < noOfElements; i++){
        sum += totals[i];
    }
    return (sum / noOfElements);
}

for (let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
}

for (let i = 0; i < tips.length; i++){
    totals.push(bills[i] + tips[i]);
}

const average = calcAverage(totals);
console.log(`The average is ${average} 💰`);

