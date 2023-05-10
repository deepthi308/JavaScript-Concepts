// ES6 introduced three ways to create objects

const openingHours = {
    monday: {
        open: '8 am',
        close: '8 pm'
    },
    tuesday: {
        open: '8 am',
        close: '8 pm'        
    },
    wednesday: {
        open: '8 am',
        close: '8 pm'        
    },
    thursday: {
        open: '8 am',
        close: '8 pm'        
    },
    friday: {
        open: '8 am',
        close: '8 pm'        
    }
}

const restaurant1 = {
    fullName: 'Tasty',
    seatings: 150,
    menu: {
        starter: [
            'Lemon juice',
            'Fruits salad',
            'Mango rice',
            'Veg soup'
        ],
        main: [
            'Briyani',
            'Noodles',
            'Fried Rice',
            'Chicken Lollipop',
            'Gobi Manjurian'
        ],
        drinks: [
            'Sarbath',
            'Jigidhaanda',
            'Vannila icecream'
        ]
    },
    // openingHours:openingHours

    // ES6 enhanced object literals - 1
    openingHours
}

console.log(restaurant1);

// 2-In ES6 we don't have to create  a property with the name of the function and assign the fuction declaration to it.
// Instead we can directly place the function inside the object and the property will be alocated automatically  which will be similar to the name of the function

const restaurant2 = {
    fullName: 'Tasty',
    seatings: 150,
    menu: {
        starter: [
            'Lemon juice',
            'Fruits salad',
            'Mango rice',
            'Veg soup'
        ],
        main: [
            'Briyani',
            'Noodles',
            'Fried Rice',
            'Chicken Lollipop',
            'Gobi Manjurian'
        ],
        drinks: [
            'Sarbath',
            'Jigidhaanda',
            'Vannila icecream'
        ]
    },
   
    // justAFunction: function () {
    //     console.log('I am a function');
    // }
    // ES6 enhanced object literals - 2
    justAFunction() {
        console.log('I am a function');
    }
}

console.log(restaurant2);


// ES6 enhanced object literals - 3
const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

const openingHours2 = {
    [weekdays[0]]: {
        open: '8 am',
        close: '8 pm'
    },
    [weekdays[1]]: {
        open: '8 am',
        close: '8 pm'
    },
    [weekdays[2]]: {
        open: '8 am',
        close: '8 pm'
    },
    [weekdays[3]]: {
        open: '8 am',
        close: '8 pm'
    },
    [`day-${2+3}`]: {
        open: '8 am',
        close: '8 pm'
    }
};

console.log(openingHours2);


