const restaurant = {
    fullName:'Tasty',
    openingHours: {
        tuesday: {
           open:'8 am',
           close:'8 pm'            
        },
        wednesday: {
           open:'8 am',
           close:'8 pm'                
        },
        thursday: {
           open:'8 am',
           close:'8 pm'                
        },
        friday: {
           open:'8 am',
           close:'8 pm'                
        }
    },
    menu: ['Briyani', 'Friedrice', 'Noodles', 'Chicken Lolipop'],
    order: function () {
        return 'Order Placed!';
    }
}

// console.log(restaurant.openingHours.mon.open);

if (restaurant.openingHours.monday) {
    console.log(restaurant.openingHours.mon.open)
}
// if (restaurant.openingHours.friday) {
//     console.log(restaurant.openingHours.friday.open);
// }

// ES6 Introduced  a feature called optional chaining (?.)

// Example 1:

// If it is present do this operation with that else don't do.
// console.log(restaurant?.openingHours?.mon.open);
console.log(restaurant?.openingHours?.mon?.open);
// If  it has undefined or null it will just return the value and won't perform any operation with null or undefined which will give error.
// If  if doesnot have undefined it will perform the entire operation  and return the final value

// Example 2:

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
for (const day of days) {
    console.log(day);
    const open = restaurant?.openingHours[day]?.open ?? 'Closed';
    console.log(`On day ${day}, we open at ${open}`);    
}

// Note: If we want to access the property of the object using the actual property name. We can use dot notation. But if we want to access a property through variable we need to use square brackets. Example : objection.[variable]

// Optional Chaining On Methods:

console.log(restaurant?.order?.() ?? 'Not Accepting Orders!');

// Optional Chaining On Methods:

const users = ['Deepthi1', 'Deepthi2', 'Deepthi3', 'Deepthi4', 'Deepthi5'];

