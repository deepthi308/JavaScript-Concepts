// While Loop:

// While loops were basically used when we don't know how many iterations  are needed.
// It will keep on running until the condition becomes false.
// Example: A program that will keep on running until or unless the user press the x button can be created using a while loop.
// Counter(i++) variable in while is not mandatory
// Whenever we don't don't know how many iterations are needed beforehand and the loop is independed of the counter  value and based only on the condition mentioned in the while we can go for while loop.

// const deepthiFriends = ['I', 'Me', 'Myself'];
// const deepthi = ['Deepthi', 'Hariraman', 2002, 2023 - 2002, 'Multi-Billionaire', deepthiFriends];

let exercise = 1;
while (exercise <= 3) {
    console.log(`Exercise ${exercise}: count ${1} 🏃‍♀️`)
    console.log(`Exercise ${exercise}: count ${2} 🏃‍♀️`)
    console.log(`Exercise ${exercise}: count ${3} 🏃‍♀️`)
    console.log(`Exercise ${exercise}: count ${4} 🏃‍♀️`)
    console.log(`Exercise ${exercise}: count ${5} 🏃‍♀️`)
    console.log(`Exercise ${exercise}: count ${6} 🏃‍♀️`)
    console.log(`Exercise ${exercise}: count ${7} 🏃‍♀️`)
    console.log(`Exercise ${exercise}: count ${8} 🏃‍♀️`)
    console.log(`Exercise ${exercise}: count ${9} 🏃‍♀️`)
    console.log(`Exercise ${exercise}: count ${10} 🏃‍♀️`)
    exercise++;
}
    
//  We want to roll a dice until the value of the dice is six.

let diceNumber = Math.ceil(Math.random() * 6);

while (diceNumber !== 6) {
    console.log(`Dice rolled: number ${diceNumber}`);
    let newDiceNumber = Math.ceil(Math.random() * 6);
    diceNumber = newDiceNumber;
}
console.log(`Dice number ${diceNumber} 😀. Start Playing!`)

// console.log(Math.ceil(Math.random() * 6));

    
