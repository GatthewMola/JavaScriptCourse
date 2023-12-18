// Create a function that moves an element in an array.
// The first argument is the array, the second is the index position of the element to be moved, 
// and the third is the index position where the element should be moved.
// This third argument can be negative if moving an element to the left.

const numbers = [1, 2, 3, 4];

// const output = move(numbers, 1, 2);
// console.log(output);

// My Attempt:
function move(array, index, offset) {
    const output = [];
    for (let element of array)
        output.push(array);
    return output.splice(index, offset);
};
// Current output is returning an empty array.
// If change arguments to "1, 2", returns: [ [ 1, 2, 3, 4 ], [ 1, 2, 3, 4 ] ]. Strange.

// Second Attempt with Hints: Need to remove the chosn index and add it back into the offset position
const output2 = move2(numbers, 1, 2);
console.log(output2);

function move2(array, index, offset) {
    const output2 = [...array];
    for (let element of array)
        if (element === index)
            output2.splice(index, 1);
    for (let element of array)
        if (element === offset)
            output2.splice(offset, 0);
    return output2;
};
// Current function is simply removing the element from the 'index' position. The second splice method is not adding it back into
// the 'offset' index position.

// Mosh Method:
const output1 = move2(numbers, 1, 2);
console.log(output1);

function move1(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }
    
    const output1 = [...array]; // If we want to copy the input array into a new array, simply use the spread operator.
    const element = output.splice(index, 1)[0]; // We are adding [0] here because the .splice method returns the removed element in its array. We are returning this removed element.
    output.splice(index + offset, 0 , element);
    return output;
};
// Need to study the different included options for these array methods.