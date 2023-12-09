// FizzBuzz Challenge!

// My Method: For Loop
for (let num = 1; num <= 100; num++) {
    if (num % 3 == 0 && num % 5 == 0)
        console.log('FizzBuzz');
    else if (num % 3 == 0)
        console.log('Fizz');
    else if (num % 5 == 0)
        console.log('Buzz');
    else
        console.log(num);
}

// My Method: While Loop (PS. Don't forget a increment operator at the end of loop!)
let num = 1;
while (num <= 100) {
    if (num % 3 == 0 && num % 5 == 0)
        console.log('FizzBuzz');
    else if (num % 3 == 0)
        console.log('Fizz');
    else if (num % 5 == 0)
        console.log('Buzz');
    else
        console.log(num);
    num++;
}