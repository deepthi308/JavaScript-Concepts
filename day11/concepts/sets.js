// Set Data Structure

const ordersSet = new Set(['Pasta', 'Pizza', 'Noodles', 'Mushroom Manchurian', 'Noodles',0]);

console.log(ordersSet);

// Similar to array sets are iterable
// But unlike  arrays the elements in the sets are unique

// We can also create a set using strings

console.log(new Set('Hello'));
// But still each character in the set will be unique

// We can also create empty set
console.log(new Set());

// We can access the length of the set using the size property of the set
console.log(new Set().size)
console.log(new Set("fdjdfsbcf").size)
console.log(new Set(['sdhdgs', 'usdjdjsb', 'dgsdsfb']).size);

// To check whether a certain element is present in  the set
// As we have contains in array, hasOwnProperty

console.log(ordersSet.has('0'));
// has method in set compares  strictly
console.log(ordersSet.has('Noodles'));

// We can also  add elements to the set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);
// If we try to add the same element twice in the  set, It will be added only one time and the second will be ignored

// We can also delete  elements from the set
ordersSet.delete('Noodles');
console.log(ordersSet);
ordersSet.delete(0);
console.log(ordersSet);

// We cannot access the elements present in the set using their indexes as we do in the array

console.log(ordersSet[0]);// This will return undefined

// There is no way to retrieve the elements from the set.
// As the elements in the set are unique it will be usefull  when we want to store the elements without any duplication and to check whether an element is present in the set using the has method
// If we need to store as  well as retrive the elements then array is the best option

// To delete all the elements present in the set
// ordersSet.clear(); // This method won't return anything
console.log(ordersSet);

// As we know that sets  are iterable we can also loop over them

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const uniqueStaff = new Set(staff);
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);
// Here spread operator is used to unpack the elements from the set and that unpacked elements is placed in a new array
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size)

console.log(new Set('Deepthi').size);// This won't return the original number of elements but it returns the unique characters that are present in the string

// Sets  are  not intended to replace  array
// Only used when we want to store unique values
// However arrays have a lot of functionalities and properties so it will be helpfull if there is no problem with the dulication of elements



