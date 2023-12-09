// Complete this function that displays whether a number is even or odd next to each number.

// My Attempt: I did not see how I would use the given function.
for (limit = 1; limit <= 10; limit++) {
    if (limit % 2 == 0)
    console.log(limit + ( 'EVEN'));
    else if (limit % 2 !== 0)
    console.log(limit + ( 'ODD'));
}

// Correct Methods by Mosh (with given function)
// Method 1:
showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) console.log(i, 'EVEN');
        else console.log(i, 'ODD');
    }
}

// Method 2:
showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
        console.log(i, message);
    }
}