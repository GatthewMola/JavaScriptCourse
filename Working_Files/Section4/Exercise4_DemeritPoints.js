// Implement function checkSpeed

// Speed Limit = 70
// For every 5 over the speed limit, they receive 1 point
// In order to write this function, we will need to use the Math.floor command
// If a driver gets more than 12 points, their license is suspended ("License Suspended")

// My Attempt
// function checkSpeed(speed) {
//     if (speed <= 70)
//         console.log('Ok');
//     else if (speed > 70)
//         Math.floor((speed - 70) / 5);
//     if (Math.floor(((speed - 70) / 5) > 12))
//         console.log('License Suspended');
// }

// console.log(checkSpeed(180));

// Correct Method from Mosh
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return; // Stating return here within the if statement block will stop the code below from executing if the if statment is true.
    }
    // Because we are using the return statement, we no longer need to use the else statement block before this code. 
    const points = Math.floor(((speed - speedLimit) / kmPerPoint));
    if (points >= 12)
        console.log('License Suspended');
    else
        console.log('Points', points);
}
console.log(checkSpeed(72));

// Notes After Completion
// Need to remember to use variable creation within functions, this will be useful and necessary going forward.
// When defining multiple else scenarios, create an else statement in curly braces.
// Don't forget to use console.log to correctly display strings to terminal.
// No need to write return in return statements. Can simply put return statement under if/else statements.