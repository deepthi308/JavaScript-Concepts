// Maps can contain key value pairs
// Here unlike objects where the keys  should always be string

const restaurant = new Map();
console.log(restaurant);
restaurant.set('name', 'Dhenskript');
restaurant.set('contact', 'dhenskript@dhenskript.com')
restaurant.set('location', 'Chennai')
restaurant.set('categories', ['Pasta', 'Noodles', 'Garlic Bread', 'Cheese Pizza']);// return the new modified set
// We can also chain the set method
// restaurant.set('key', 'value').set('another key', 'another value');
restaurant.set('open', 11).set('close', 23);
restaurant.set(true, 'we are open :D').set(false, 'we are close :(');

console.log(restaurant);

// In order to read the data from map we can use the get method on the map

console.log(restaurant.get('name'));
console.log(restaurant.get('location'));
console.log(restaurant.get('contact'));
console.log(restaurant.get('categories'));
console.log(restaurant.get(true));

// const currentTime = new Date().getHours();
const currentTime = 24;
// console.log(currentTime);

if (currentTime >= restaurant.get('open') && currentTime <= restaurant.get('close')) {
    console.log(restaurant.get(true))
} else {
    console.log(restaurant.get(false));  
}

console.log(restaurant.has('contact') && restaurant.delete('contact'));
console.log(restaurant.delete('contact')
);// returns false if  the element does not exist in the array

console.log(restaurant);

// We can also get the size of the map using  the size property
console.log(restaurant.size);

// In map any datatype can be a key we can also put an array as key
restaurant.set([1, 2, 3], 'Test');
console.log(restaurant);
console.log(restaurant.get([1, 2, 3]));// returns undefined as the two arrays have the same values but stored in different parts of the memory

const arr = [1,2,3,4]
restaurant.set(arr, 'Test');
console.log(restaurant);
console.log(restaurant.get(arr));// This  returns the value of the key
// Here we are using the same array while setting and getting by storing it to a reference variable which points to the same array in the heap













