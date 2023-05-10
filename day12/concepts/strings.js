// Strings

const airLine = 'TAP Air Portugal';
const plane = 'A320';

// Just like arrays we can get the character of the string at certain position
// Strings are iterable
// Strings in java are primitive and it is imposible to mutate the orinal strings but we can modify the original strings and store the modified string in a new variable

console.log(airLine[0]);

let temp = '';
for (const char of airLine) {
    temp += char;
}

console.log(temp);
console.log(temp == airLine);// returns true as both the reference variables are holding the same value
console.log(temp === airLine)// returns false as both of these reference variables are pointing towards different objects and these objects are not stored in the same location in the heap of the thread
console.log(`${'DeepthiHariraman'[0]}${'DeepthiHariraman'[7]}`)

console.log(plane.indexOf('A'));
console.log(plane.charAt(0));
console.log(airLine.indexOf('Portugal'));
console.log(airLine.charAt(2));

// indexOf() method can be helpful while using methods that require index as the argument to perform certain operations

// Slice method on string

const sliced = airLine.slice(airLine.indexOf('TAP'), airLine.indexOf('Portugal'));
// Slice method returns the elements or characters to be more accurate in the case of strings between the starting index and the ending index excluding the ending index 
// This method won't mutate the original value
console.log(sliced);
console.log(airLine);// orinal value remains the same
// If we don't pass the ending index it will return all the elements from the starting index that we have passed

console.log(airLine.slice(airLine.indexOf('Air')));
//airLine.indexOf('Air'))-->  returns the indexOf 'A'
console.log(airLine.slice(2));

// To extract the first word from the string
console.log(airLine.slice(0, airLine.indexOf(' ')));

// To extract the last word from the string
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1, airLine.length));

console.log(airLine.slice(-2)) // returns the last two letters of the string.
// First character index ---> 0
// Last character index ---> -1
console.log(airLine.slice(-(airLine.length)))// returns all the character. We don't have to use length-1 as the index starts from negative 1 and not negative 0

console.log(airLine.slice(0, -1));
console.log('----------------------------');

// Write a function that recieves the airplane seat and log into the console whether it is a middle seat or not

// console.log('11B'.toUpperCase().includes('E'));
const checkMidSeat = function (seatNo) {
    // B and E are middle seats
    let seat = seatNo.toUpperCase()
    if (seat.includes('B') || seat.includes('E')) {
        console.log(`${seat} is middle seat 😬`)
    } else {
        console.log(`${seat} is not a middle seat 😎`)
    } 
}

checkMidSeat('11b');
checkMidSeat('23C');
checkMidSeat('3E');

// We know that string is a primitive datatype in javascript.
/*
So, you might think how string have access to this much properties and method

That is because javascript is smart enough to convert these string to an object with the same content inside it behind the scenes. So, its on  that object these methods are called

This process is called boxing. Because it  takes in a string which primitive and put it inside a box called object

Once the operations are performed on the string this string is converted back to the string

*/

console.log(new String('Deepthi Hariraman'));
console.log(typeof new String('Deepthi Hariraman'));// Object
console.log(typeof new String('Deepthi Hariraman').toUpperCase());// converted back to string

