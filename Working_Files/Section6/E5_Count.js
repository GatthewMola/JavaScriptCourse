// Create a function that takes an array and search element and returns the number of times that search element has occured in the array.

const numbers = [1, 2, 3, 1, 4];

const count = countOccurrences(numbers, 1);
console.log(count);

// My Attempt:
function countOccurrences(array, searchElement) {
    let count = 0;
    for (let element of array)
        if (element === searchElement)
            count++;
    return count;
};
// This is correct.

// Mosh's Method: Using the .reduce() method
function countOccurrences1(array, searchElement) {
    array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
};