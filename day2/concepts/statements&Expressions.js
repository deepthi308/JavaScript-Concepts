// Expressions ---> Piece of code that produces value
// Statements/Declarations ---> Sentences or lines of code that doesn't return any value and also include expressions within it.

// Expressions :

3 + 4;//return value(7)---> Expression
1991; //This itselt is a value. So it will return itself
true && false && !false // returns a boolean value(false)

// Statements ---> Complete sentences
// Expressions ---> Words that make up the sentences

// We write a program as a sequence of actions and these actions are the statements and the expressions are the words that makes up the actions.

if (23 > 10) {
    const message = '23 is greater than 10';
}

//Here, the entire if condition alone  with the block is a statement which doesn't return any value. All it does is creating a variable and assigning value to it. But however the boolean value returned by the expression (27 > 10) is what makes up the statement.

// We have to be aware of what exactly is expression and what exactly is statements. Because we have to use them accordingly.
 
// We can only able to place expressions inside template literals.
// But we can't put statements inside template literals
// Also in if, switch statements the conditions and parameters that we are passing should be expression that returns the value which makes up the statements.

console.log(`I  am inside template literals ${1 + 7}`);//valid
// console.log(`I am inside template literals ${if (23 > 10) {
//     const message = '23 is greater than 10';
// }}`)//not valid statements are not allowed inside ${} this



