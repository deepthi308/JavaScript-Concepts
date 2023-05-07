// Object Destructuring:
// Use curly braces to destructure

const restaurant = {
    hotelName:'Tastyy',
    dishes: {
        monday: ['idli', 'dhosai', 'poori', 'chappathi', 'vadai'],
        tuesday: ['briyani', 'chicken', 'tandhoori', 'noodles', 'pachidi'],
        wednesday: ['briyani', 'chicken', 'tandhoori', 'noodles', 'pachidi'],
        thursday: ['idli', 'dhosai', 'poori', 'chappathi', 'vadai'],
        friday: ['idli', 'dhosai', 'poori', 'chappathi', 'vadai'],  
    },
    availability: {
        weekdays: 'open',
        weekends:'close'
    }
}

restaurant.delivery = function ({index=0,day='tuesday',date}) {
    console.log(`${this.dishes[day][index]} delivery from ${this.hotelName} on ${day} at ${date}`)
}

restaurant.delivery({
    index: 1,
    day: 'monday',
    date: new Date().getFullYear(),
});

restaurant.delivery({
    date:new Date().getFullYear(),
})

const { hotelName, dishes } = restaurant;
const { monday,tuesday,friday,thursday,wednesday} = dishes;

console.log(hotelName);
console.log(dishes);
console.log(monday,tuesday,thursday,friday,wednesday);

