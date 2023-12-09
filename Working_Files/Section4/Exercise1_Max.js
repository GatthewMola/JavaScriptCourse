// Write a function that takes two numbers and returns the maximum of the two

//My Method
let x = 4;
let y = 8;

function max(numbers) {
    return Math.max(x, y);
}

console.log(max(x, y));

// Mosh's Method
let number = max(2, 3)
console.log(number)

function max(a, b) {
    if (a > b) return a;
    else return b; // Can also remove 'else' for cleaner code
}

// Even cleaner method: Use conditional operator!
function max(a, b) {
    return (a > b) ? a : b;
}

// When testing code, make sure to try greater number for a, then greater number for b. Try to break the code.