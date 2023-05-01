// Looping Backwards:
// Previously we have only looped from the beginning
// No we are going to loop  through the array from the end.

// 0, 1, 2, 3, 4, 5
// 5, 4, 3, 2, 1, 0

const deepthiFriends = ['I', 'Me', 'Myself'];
const deepthi = ['Deepthi', 'Hariraman', 2002, 2023 - 2002, 'Multi-Billionaire', deepthiFriends, '6th index but 7th element'];

console.log('-----------Looping forward-----------');
for (let i = 0; i < deepthi.length; i++){
    console.log(i,deepthi[i]);
}
console.log('--------------------------------------');

console.log('-----------Looping backward-----------');
for (let i = deepthi.length - 1; i >= 0; i--){
    console.log(i,deepthi[i]);
}
console.log('--------------------------------------');

