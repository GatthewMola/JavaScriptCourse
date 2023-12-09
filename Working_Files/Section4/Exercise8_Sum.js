// Finish this function that should sum up all the multiples of 3 and 5 up to a certain limit and return.

// My Attempt:
console.log(sum(10));

function sum(limit) {
    const count = 0;

    for (i = 0; i <= limit; i++) {
        if (i % 3 === 0)
            (count + i);
        else if (i % 5 === 0)
            (count + i);
    }
}

// Correct Method by Mosh:
console.log(sum(10));

function sum(limit) {
    let sum = 0; // This variable can't be a constant because we will be assigning it new values in the for loop!

    for (i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            sum += i; // Forgot about this operator!
    }

    return sum; // Function will not work without returning the sum operation.
}