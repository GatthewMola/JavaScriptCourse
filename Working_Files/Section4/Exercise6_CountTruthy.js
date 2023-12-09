// Finish this function that counts the number of truthy elements in an array.
// Truthy Refresher:
// const isActive = true;
// const firstName = 'Mosh'; // Truthy (true)
// const lastName = ''; // Fasly (false)
// if (firstName) console.log('Hello'); // This will return 'Hello' because JS will interpret the string as a boolean

// My Attempt:
// const array = [1, 0, 4, 5, null];

// function countTruthy(array) {
//     if (array !== [0, null, undefined, '', false, NaN])
//         return;
// }

// console.log(countTruthy(array));

// Correct Method by Mosh: (Remember the For/Of loop counts elements in an array!)
const array = [null, 2, 0, 4, NaN, 1, null];

function countTruthy(array) {
    let count = 0;
    for (let value of array) // Need to study the syntax of the For/Of loop more
        if (value) // Remember that truthy values are any values that can return true
            count++; // This incremental will increase the resulted "count" by one if the if statement is true
    return count;
}

console.log(countTruthy(array));