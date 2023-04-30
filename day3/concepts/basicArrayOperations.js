//Array methods ---> Array operations

const friends = ['Deepthi1', 'Deepthi2', 'Deepthi3'];
console.log(friends, friends.length);
// Push method/function:
//It is a function which is used to add or push an element to the end of the array. It will mutate the elements of the array but not the entire array.
//Since, it is a function it can also return some value right? yes, it will push the element that we pass into the array and return the curren length of the array after we perform the push operation.
let newlength = friends.push('Deepthi4');
console.log('After push');
console.log(friends, newlength);

///Unshift function or method:
// This function of the array is used to add an element at the begining of the array.
// Similar to push function this method will also return the newlength of the array once added the element that we pass in the beginning of the array.
newlength = friends.unshift('Deepthi0');
console.log('After unshift');
console.log(friends, newlength);

// Pop method/function:
// This function is used to remove the last element of the array.
// Unline push and unshift which returns the length of the array after performing the operations.
// This function returns the element that is popped out of the array.
// And we don't have to pass any argument to the function as we just want to pop the last element that is already present in the array.
// If the array is empty and we perform pop operation on the array. This will return undefined.
let poppedElement = friends.pop();
console.log(poppedElement);// Displays the popped element
console.log(friends);// The last element will be removed
friends.pop();
friends.pop();
console.log('Popped another two elements');
console.log(friends);

friends.push("DeepthiN");
console.log('After unshifting');
console.log(friends);

// IndexOf  function/method:
// This function returns the index of the element that we pass in as argument to the function.
// It will return the index of the first occurence of the element that we pass.
// If the element is  not present in the array. It will simply return -1;
console.log(friends.indexOf('DeepthiN'));
console.log(friends.length - 1 == friends.indexOf('DeepthiN'));
console.log(0 == friends.indexOf('Deepthi0'))
friends.push('DeepthiN');
console.log(friends.length - 1 == friends.indexOf('DeepthiN'));
console.log(friends.indexOf('Deepthi3'));
friends.pop()// Just to remove the last duplicate element 'DeepthiN'.

// Includes function/method came in the version of ES6/ES2015
// Similar to the indexOf function it is a bit modern function.
// Instead of returning the index of the first occurance of the element that we pass. This function returns true if the element is present. If the element is not prsent it will just return false.
// This function takes  two arguments as parameters
// One will be the element that we want to search for
// Second will be from which index we want to start searching
// This  operator will also check for the element strict equality operator.
// So both the value as well as type should be same
console.log(friends);
console.log(friends.includes('Deepthi0'));
console.log(friends.includes('Deepthi0', 1));// Since Deepthi0 is present in the 0th index and here we are telling the function to start searching for the element from the first index. It couldn't able to find the value and hence returned false

friends.push('10');
console.log(friends);
console.log(friends.includes(10))// Returns false because eventhough the friends array has an element with the value 10, its type is string. But the element we are  search for has a value 10 and of type number. Hence, returned false.
console.log(friends.includes('10'));// Returns true since the array contains the element that has a matching value as well as type

//This function is very helpfull as it returns the boolean value.
//This can be used in connditional statements to control the flow of execution based on the value the expression is  returning.

//Example:

let firstName = 'Deepthi';
friends.push(firstName)
if (friends.includes('Deepthi')) {
    const index = friends.indexOf('Deepthi');
    const name = friends[index];
    console.log(`Hi ${name}, you progress is good. Keep pushing yourself forward like this everday. This way you will surely \nbecome a billionaire`);
} else {
    console.log(`${firstName} not found`);
}




