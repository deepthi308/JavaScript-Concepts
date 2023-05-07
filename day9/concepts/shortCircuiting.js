// Short circuting

// The result of the Logical operator doesn't have to be boolean always
// They can use any datatype
// They can return any datatype
// They can do short circuiting

// Short circuiting using OR Operator
console.log(3 || 'jonas'); // returns 3
console.log(0 || 'jonas'); // returns 3
console.log('' || 'jonas'); // returns 3
console.log(undefined || 'jonas'); // returns 3
console.log(NaN || 'jonas'); // returns 3
console.log(null || 'jonas'); // returns 3
console.log(true || 'jonas'); // returns 3
console.log(1===1 || 'jonas'); // returns 3
console.log(1===0 || false); // returns 3
console.log(1===0 || 0===1); // returns 3
console.log(1===0 || null); // returns 3

// In the case of or operator if the first operand is a truthy value.
// It will imediatly return the value and don't look at the other operands

console.log(1 === 0 || '' || undefined || null || 'Deepthi' || true)// returns Deepthi
// The above statement prints Deepthi as the expression inside it will return the first truthy value it could find in the chain.

// If  there is no truthy value in the chain. It will just return the last falsy value as given below.
console.log(1 === 0 || '' || undefined || null || false);// returns false

const restaurant = {
    fullName: 'Tasty',
    location: 'Switzerland',
    contact:'tasty@tasty.com',
    noOfGuests: 0,
    orderPizza: function (pizzaType) {
        console.log(`${pizzaType} ordered 🍕`)
    }
}

// Using ternary operator
// const guests = restaurant.noOfGuests ? restaurant.noOfGuests : 50;
// restaurant.noOfGuests = guests;
// console.log(guests);

// Using short circuting operator
restaurant.noOfGuests = restaurant.noOfGuests || 50;
console.log(restaurant.noOfGuests);

// However if the noOfGuests is 0 then it should return  0. But since 0 is a falsy value it is returning 50 which is not what we want

// Short circuiting using AND Operator
// The AND operator do the exact opposite of OR in terms of short circuiting
// In OR: if the first value is true it won't look for other truthy values. One truthy value is enough and it will just return that particular value
// In AND: if the value is false, it won't look for other truthy values. It will just return  that falsy value
// If the value is true  it  returns the value. if there is other value near the truthy value then it will return that value.
// AND basically checks whether all the values in the chain are true not. If true returns the last value. If false just returns the falsy value

console.log('------AND------');

console.log(0 && 'hello');
console.log(1 && 'hello');
console.log(true && true && 0 && 'world');
console.log(false && 'world');
console.log('' && 'world');
console.log(undefined && 'world');
console.log(undefined && 'world');
console.log(true);

const pizzaType = 'Cheese Pizza'
pizzaType && restaurant.orderPizza && restaurant.orderPizza(pizzaType);

// Conclusion:
// 1. Short circuiting using OR operator:
// Returns the first truthy  value it could find
// If it didn't find any truthy value it will just return the false value

// 2. Short circuiting using AND operator:
// If there is any falsy value it will return the falsy value
// If all the operands returns truthy value then it will return the last truthy value





