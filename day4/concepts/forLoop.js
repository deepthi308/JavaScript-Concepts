// Loops:
// Usefull when we want to perform the same operation repetatively for a certain number of time.
// For loop
// While Loop
// Do While Loop

// Without loop to print a same statement to the console for 10 times.

// console.log('Without Loop:');
// console.log('Hello world 1');
// console.log('Hello world 2');
// console.log('Hello world 3');
// console.log('Hello world 4');
// console.log('Hello world 5');
// console.log('Hello world 6');
// console.log('Hello world 7');
// console.log('Hello world 8');
// console.log('Hello world 9');
// console.log('Hello world 10');

// But this dry code that is we are repeating the same code again. This violates the don't repeat yourself principle.

// With Loop:
// Using loop we can write only one of the statement inside the loop and that statement will be executed repeatatively until the condition that we have mentioned inside the loop fails.

// For Loop:

// Used when we know the number of iterations beforehand and when the loop is dependend on the counter varible.

// first the starting value for the number of iterations made is assigned to the rep variable. this initialization of the iterator variable happens only once.
// Then the condition  should be mentioned.If and only if the condition is satisfied the loop will get executed. This condition will be checked before the execution of each statements. If the condition returns true the body of the for loop will be executed.
// The last one is increment after the body of the loop has been executed the iteratiion value will be incremented and  the condition will be checked. if the condition is passed the loop will get executed. this process keep  on reapeating until the condition is failed.

// initialization of iterator variable (usually it will be 0/1)
// condition ---> returns boolean value (true/false)
// increment/decrement ---> this operation will be performed on the iterator after the execution of the loop

// Process:
// initializing
// checking whether the condition is passed or not
// if passed execute the body
// increment
// check condition
// execute the body
// increment
/// check condition
// execute the body
// increment
/*
* if the condition fails
* come out of the loop
 */
console.log('With Loop:')
for (let rep = 1; rep <= 10; rep++){
    console.log(`Hello world ${rep}`)
}






