const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const reducer = (accumulator, currentValue) => accumulator + currentValue;


const totalBatteries = batteryBatches.reduce(reducer, 0);

console.log(totalBatteries); // Output: 31
