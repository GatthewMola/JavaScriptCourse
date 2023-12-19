// In this code, we are assuming that the first argument will always be a valid array.
// Throw and exception for if a boolean is argued.
// Try & Catch the error as well.


// My Attempt:
const numbers = [1, 2, 3, 1, 4];

try {
    const count = countOccurrences(null, 1);
    console.log(count);
}
catch (e) {
    console.log(e.message);
};

function countOccurrences1(array, searchElement) {
    if (array !== array.isArray())
        throw new Error('array argument must be an array.')
    
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
};


// "Reference Error: alert is not defined" ???

// Mosh Method:
try {
    const numbers = [1, 2, 3, 4];
    const count = countOccurrences(null, 1);
    console.log(count);
}
catch (e) {
    console.log(e.message);
};

function countOccurrences1(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('array argument must be an array.');
    
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
};
// This still doesn't work correctly but whatever, I'll talk to Mike about it.