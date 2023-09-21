const example1 = [2, 2, 3, 2, 3];

// Loop through the elements of the input array
for (let i = 0; i < example1.length; i++) {
  // Get the current number from the array
  const numbers1 = example1[i];

  // Initialize a count variable to track the number of times the current number appears
  let count = 0;

  // Loop through the entire array to count occurrences of the current number
  for (let j = 0; j < example1.length; j++) {
    if (example1[j] === numbers1) {
      count++;
    }
  }

  // Check if the current number appears exactly twice
  if (count === 2) {
    // Print the number to the console as the output
    console.log(numbers1);
    // Exit the loop once the number is found
    break;
  }
}

const example2 = [0, 1, 0, 1, 0, 99, 1, 99];

// Loop through the elements of the input array
for (let i = 0; i < example2.length; i++) {
  // Get the current number from the array
  const numbers2 = example2[i];

  // Initialize a count variable to track the number of times the current number appears
  let count = 0;

  // Loop through the entire array to count occurrences of the current number
  for (let j = 0; j < example2.length; j++) {
    if (example2[j] === numbers2) {
      count++;
    }
  }

  // Check if the current number appears exactly twice
  if (count === 2) {
    // Print the number to the console as the output
    console.log(numbers2);
    // Exit the loop once the number is found
    break;
  }
}

const example3 = [7, 1, 1, 7, 1, 7, 99, 99, 12, 8, 12, 12, 99, 8];

// Loop through the elements of the input array
for (let i = 0; i < example3.length; i++) {
  // Get the current number from the array
  const numbers3 = example3[i];

  // Initialize a count variable to track the number of times the current number appears
  let count = 0;

  // Loop through the entire array to count occurrences of the current number
  for (let j = 0; j < example3.length; j++) {
    if (example3[j] === numbers3) {
      count++;
    }
  }

  // Check if the current number appears exactly twice
  if (count === 2) {
    // Print the number to the console as the output
    console.log(numbers3);
    // Exit the loop once the number is found
    break;
  }
}

