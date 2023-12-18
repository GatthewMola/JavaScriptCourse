// Create a function that returns the largest element in an array

const numbers = [1, 2, 3, 4];

const max = getMax(numbers);
console.log(max);

// My Attempt:
function getMax(array) {
    if (array.length <= 0) {
        console.error('Invalid array');
        return;
    };
    
    numbers.filter(function(value) {
        return Math.max(value);
    });
};

// Mosh Method: Simple
function getMax(array) {
    if (array.length === 0) return undefined;

    let max = array[0]; // Declaring max by assuminh it to be the first element in the array. If we find a larger element, we will reset the variable
    for (let i = 1; i < array.length; i++)
        if (array[i] > max)
            max = array[i];
    return max;
}

// Mosh Method: Reduce method
function getMax(array) {
    if (array.length === 0) return undefined;

    array.reduce((accumulator, current) => {
        if (current > accumulator) return current;
        return accumulator;
    });
}

// OR

function getMax(array) {
    if (array.length === 0) return undefined;

    array.reduce((accumulator, current) => {
        return (current > accumulator) ? current : accumulator
    });
};
// Can also rename 'accumulator' and 'current' to something else to simplfy further.

function getMax(array) {
    if (array.length === 0) return undefined;

    return array.reduce((a, b) => (a > b) ? a : b);
};