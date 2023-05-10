const restaurant = {
    fullName: 'Tastyy',
    availability: true,
    noOfGuests: 0,
}

const guests = restaurant.noOfGuests || 50;
console.log(guests);

const newGuests = restaurant.noOfGuests ?? 50;
console.log(newGuests);

// Nullish Operator

// The only difference between nullish coalescing operator and or operator is:
// OR operator consider 0 as falsy value 
// Nullish Coalescing operator considers 0 as truthy value  
