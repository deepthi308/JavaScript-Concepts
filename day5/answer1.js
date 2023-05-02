// Question 1:

//Problem 1:
/*
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
*/

// Understand the problem
/*
1. What is temp amplitude? => Difference beween the highest and the lowest temp
2. How to compute the max and min temperatures
3. What is sensor error and what to do
*/

// Break the problem into sub problems
/*
1. Created function called thermometer which takes the array of temperatures
2. Thisvthermometer function call two functions internally to calculate the maximum and minimun value of the temperature array by passing the temperature array as the arguments to the functions
3. These max and min values that are returned by the functions will be stores in seperate variables
4. The difference between the max and min value will be computed and returned by the function
5. This thermometer function also checks whether the array have the element called error or not. If it has just simply ignores the error and returns the temperature amplitude
*/

// Answer:

const maxTemp = (temperatures) => {
    let maxTemp = temperatures[0];
    for (let i = 1; i < temperatures.length; i++){
        if (typeof temperatures[i] !== 'number') continue;
        if (maxTemp < temperatures[i]) {
            maxTemp = temperatures[i]
        }  
    }
    console.log(maxTemp)
    return maxTemp;
}

const minTemp = (temperatures) => {
    let minTemp = temperatures[0];
    for (let i = 1; i < temperatures.length; i++){
        if (typeof temperatures[i] !== 'number') continue;
        if (minTemp > temperatures[i]) {
            minTemp = temperatures[i]
        }
    }
    console.log(minTemp);
    return minTemp;
}
   

const thermometer = function (temperatures) {
    const tempAmplitude = maxTemp(temperatures) - minTemp(temperatures);
    return tempAmplitude;
}

const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatureAmplitude = thermometer([...temperatures1,...temperatures2]);
console.log(`Temperature Amplitude: ${temperatureAmplitude}`);

// Problem 2:
// Function should now recieve two arrays
/*
1. Understand the problem:
Should we implement the same functionality with two arrays? No, Just merge the two arrays.

2. Break the problem into sub problems:
Merge two arrays
//const temperatureAmplitude = thermometer([...temperatures1,...temperatures2]);
*/



