// Finish function that displays all the prime numbers up to a certain limit.
// Prime numbers are those whose only factors are 1 and itself.

// My attempt: Not sure how to write if statement that *only* counts the primes.
showPrimes(20);

function showPrimes(limit) {
    for (i = 0; i <= limit; i++) {
        if (i % 1 === 0 && i % i === 0)
        console.log(i);
    }
}

// Correct Method by Mosh:
showPrimes(20);

function showPrimes(limit) {
    for (num = 2; num <= limit; num++) { // Initialize set to 2 as it is the first prime
        let isPrime = true;
        for (factor = 2; factor < num; factor++) { // We did not include 1 in this initialization as it every number can be divided by one.
            // We are also not setting the factor <= num as the same number can be divided evenly by itself.
            if (num % factor === 0) {
                isPrime = false;
                break; // We add a break inside this block so that the factor loop stops running on that iteration if the number is not prime.
            }
        }
        if (isPrime) console.log(num);
    }
}

// We can also make this function cleaner by breaking out the factor loop into its own function.
// My Attempt at cleaning:
showPrimes(20);

function showPrimes(limit) {
    for (num = 2; num <= limit; num++) 
    if (factored(num)) console.log(num);
    }

function factored(ceiling) {
    let isPrime = true;
    for (factor = 2; factor < num; factor++) {
        if (num % factor === 0) {
            isPrime = false;
        }
        return true;
    }
}

// Correct cleaning method by Mosh:
showPrimes(20);

function showPrimes(limit) {
    for (num = 2; num <= limit; num++)
        if (factored(num)) console.log(num);
}

function factored(ceiling) {
    for (factor = 2; factor < num; factor++) 
        if (num % factor === 0) 
            return false;
    return true;
}