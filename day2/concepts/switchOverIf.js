//Switch statement matches the choice that is passed in it with the case values. If any case is matched it will execute the body of that particular case.
// if  no  case is matched with the values that is passed the default case will get executed
//break statement is neccessary in ease of the case. otherwise it will execute  the remaining cases until it finds the break

// --------------Using Switch Statements ------------------//

const day = "monday"

switch (day) {
    case 'monday'://similar to day === 'monday'
        console.log('Plan the course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}

// --------------Using Switch Statements ------------------//

// We can do the same thing using if also however using switch make it more readable when compared to if.
// Let's see how the same program look in if

// -----------------Using If Statements ------------------//

if (day === 'monday') {
    console.log('Plan the course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day');
}

// -----------------Using If Statements ------------------//

//In in statement we don't have to include break statement as it only executes that part of block that statisfies the condition.
// We can use either if or swicth based on personal preferencesthe logic will be same.