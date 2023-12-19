// Create a function called 'sum' that takes a varying number of arguments and returns their sum.
// Then, to challenge yourself, modify the sum function to be able to accept an array of arguments and still return the same result.
// To determine that the arguments we passed are an array, we use array.isArray method.

// My Attempt at the first question:
function sum(...args) {
    return args.reduce((a, b) => a + b);
};

console.log(sum(1, 2, 3, 4));
// This works!

// My Attempt at the challenge:
function sum(...args) {
    return args.reduce((a, b) => [a + b]);
};

sum.apply([1, 2, 3, 4]);

// Mosh Method for Challenge:
function sum(...args) {
    if (args.length === 1 && Array.isArray(args[0])) // "If there is only one argument, and the argument is an array..."
        args = [...args[0]]; // "... then we want our argument to equal that array."
    return args.reduce((a, b) => a + b);
};

console.log(sum([1, 2, 3, 4]));
// This method essentially turns the first argument (one single array passed as one single argument)...
// into an array of several different arguments.
// A little convoluted but makes sense in the end.