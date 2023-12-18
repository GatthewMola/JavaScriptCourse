// Create a function that creates an array from a given range of numbers.
// Just taking Mosh's answer here.

const numbers = arrayFromRange(1, 4);

console.log(numbers);

function arrayFromRange(min, max) {
    const output = []; // We first need to construct an empty array to insert our new elements
    for (let i = min; i <= max; i++) // Create for loop to initializes on min and increments until it reaches the given max element.
        output.push(i); // Using the push method we will insert new elements into the empty array, incrementing from the beginning.
    return output;
};