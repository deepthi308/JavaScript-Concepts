// Loops In Loops

// We are going to do three type of exercises
// Here each exercises should be performed 4 times to move to the next type of exercise.

// Three types of exercise is itself a loop
// These three exercises internally should be done three times, which is another loop.

// So, it goes like
// exercises -> counts
// exercise 1
/// count 1
/// count 2
/// count 3
/// count 4
// exercise 2
/// count 1
/// count 2
/// count 3
/// count 4
// exercise 3
/// count 1
/// count 2
/// count 3
/// count 4
for (let exercise = 1; exercise <= 3; exercise++){
    console.log(`---Starting exercise----${exercise}`);
    for (let count = 1; count <= 9; count++){
        console.log(`Exercise ${exercise}: count ${count} 🏃‍♀️`);
    }
}