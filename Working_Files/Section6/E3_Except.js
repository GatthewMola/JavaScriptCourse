// Create a function that excludes a given value from a passed array.

const numbers = [1, 2, 3, 4];

const output = except(numbers, [1]);

console.log(output);

// My Attempt:
function except(array, excluded) {
    for (let element of array)
        if (element === excluded)
            return array.splice(excluded);
};
// This code works if 'excluded' in 'output' object is not an array. In it's current state it does not work.

// Mosh Method:
function except1(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element)) // If an element is NOT included in the 'excluded' array, it will be added to the 'output' array.
            output.push(element);
    return output;
};

const output1 = except1(numbers, [1]);

console.log(output1);