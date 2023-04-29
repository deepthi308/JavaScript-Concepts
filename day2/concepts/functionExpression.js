// Function Expression

// Here basically we will assign an annonymous function to a variable and that varible will hold the function.
// If we want to call the function, we should call using the name of the variable.

/*
Syntax:
const myVariable = function(){
 return 'I am a function expressio and I am assigned to a variable'
}
*/

// Example

const add = function (parameter1,parameter2) {
    return parameter1 + parameter2;
}

// parameters are basically a placeholder for the arguments that we pass.
//It acts as a local variable that can be accessed only within that particular function.
// when we pass the arguments which is the actual values. These values will be  assigned to the parameters of the function when we call the function.

const addResult = add(4 , 4);
console.log(addResult);