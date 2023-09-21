const originalArray = [16, true, "8", 4, 9, "6", 36, false, 49, 9, "HiCoders", "false", 1, 4, "true"];

// Create a new array and add only items of type number
const numberArray = [];
for (let i = 0; i < originalArray.length; i++) {
  if (typeof originalArray[i] === 'number') {
    numberArray.push(originalArray[i]);
  }
}

// Print the new array to the console
console.log(numberArray);

// Calculate the square of each item in the new array
const squareArray = [];
for (let i = 0; i < numberArray.length; i++) {
  squareArray.push(numberArray[i] ** 2);
}

// Print the square array to the console
console.log(squareArray);

// Calculate the square root of each item in the new array
const sqrtArray = [];
for (let i = 0; i < numberArray.length; i++) {
  sqrtArray.push(Math.sqrt(numberArray[i]));
}

// Print the square root array to the console
console.log(sqrtArray);

// Find the smallest item in the new array
let minNumber = numberArray[0];
for (let i = 1; i < numberArray.length; i++) {
  if (numberArray[i] < minNumber) {
    minNumber = numberArray[i];
  }
}

// Print the smallest item to the console
console.log(minNumber);

// Find the largest item in the new array
let maxNumber = numberArray[0];
for (let i = 1; i < numberArray.length; i++) {
  if (numberArray[i] > maxNumber) {
    maxNumber = numberArray[i];
  }
}

// Print the largest item to the console
console.log(maxNumber);

// Calculate the sum of the items in the new array
let sum = 0;
for (let i = 0; i < numberArray.length; i++) {
  sum += numberArray[i];
}

// Print the sum to the console
console.log(sum);

// Calculate the average of the items in the new array
const average = sum / numberArray.length;

// Print the average to the console
console.log(average);
