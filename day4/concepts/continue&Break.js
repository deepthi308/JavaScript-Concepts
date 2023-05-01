// Continue & Break

// Continue:
// We can exit or skip the current iteration of the loop based on the condition.

const deepthiFriends = ['I', 'Me', 'Myself'];
const deepthi = ['Deepthi', 'Hariraman', 2002, 2023 - 2002, 'Multi-Billionaire', deepthiFriends];
const deepthiNew = [];

// Only Strings
for (let i = 0; i < deepthi.length; i++){
    if (typeof deepthi[i] !== 'string') {
        deepthiNew[i] = 'Not string';
        continue;
    }
    deepthiNew[i] = deepthi[i];
}

console.log('---------Only strings---------', deepthiNew);

// Break:
// Break statement completely comes out of the whole loop not just the current iteration.

// To break out  of the loop or terminate the loop if it finds the value of 'number' type.
for (let i = 0; i < deepthi.length; i++){
    if (typeof deepthi[i] === 'number') {
        break;
    }
    console.log(deepthi[i]);
}

console.log('--Break when found a number--', deepthiNew);
// This will only print the element in the 0th and 1st index. As it finds the element of type number it will break out of the entire loop.  