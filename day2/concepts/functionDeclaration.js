// Function Declaration

/*
Syntax:

1. Without parameters
function functioName(){
    return value
}

2. With Parameters
function functionName(parameter1,parameter2){
    return parameter1 + parameter2
}

Inorder to invoke the function we have to pass matching set of arguments while calling
*/

// Example

function sayHello() {
    console.log('Hello programmer');
}

sayHello();//invoking/running/executing the function

function juiceMaker(type, glasses, isSugar) {
    const newType = type.trim().toLowerCase().split('').map((letter,index) => {
        if (index === 0) {
           return letter.toUpperCase();
        }
        return letter;
    }).join('');
    // console.log(newType);
    let juice = `${newType} juice 🍹 `;
    juice += (isSugar) ? 'with sugar' : 'without suagar';
    return juice;
}

const myFavJuice = juiceMaker('dharboosini', 8, true);
console.log(myFavJuice);