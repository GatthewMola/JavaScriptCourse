// Write a function that behave like the includes method. (Essentiall recreate the includes method constructor function_.)
const numbers = [1, 2, 3, 4];

console.log(numbers.includes(1));

// My Attempt:
function includes(array, searchElement) {
    for (let searchElement in array)
        return searchElement
};

console.log(includes(numbers, 1));

// Mosh Method:
function includes2(array, searchElement) {
    for (let element of array) // Need to remember that For/Of loops are for arrays!
        if (element === searchElement) // Need to declare searchElement as its own property.
            return true;
    return false;
};

console.log(includes2(numbers, 1));