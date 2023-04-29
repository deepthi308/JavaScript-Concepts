// Food Processor is going to prepare juice
// For that it should cut the fruit
// So here the food processor is a function and this function will call another function to cut the fruit named cutter.

function fruitCutter(fruit, quantity) {
    const pieces = quantity * 4;
    console.log(`${fruit} is cutted into ${pieces} pieces 🔪`);
    return pieces;
}

function mixy(fruit,pieces) {
    return ` ${fruit} juice `
}

function fruitProcessor(type, quantity, isSugar, glasses) {
   const cuttedFruits = fruitCutter(type, quantity);
    let juice = mixy(type, cuttedFruits);
    if (isSugar) {
        console.log('Sugar is added 🧂');
    }
    juice += (isSugar) ? 'with sugar' : 'without sugar';
    juice = `${glasses} glasses of 🥃` + juice+ ' 😋';
    return juice;
}

const myFavJuice = fruitProcessor('orange', 4, true, 8);
console.log(myFavJuice);