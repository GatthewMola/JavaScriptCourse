// Implement function checkSpeed

// Speed Limit = 70
// For every 5 over the speed limit, they receive 1 point
// In order to write this function, we will need to use the Math.floor command
// If a driver gets more than 12 points, their license is suspended ("License Suspended")

// My Attempt
function checkSpeed(speed) {
    if (speed <= 70)
        console.log('Ok');
    else if (speed > 70)
        Math.floor((speed - 70) / 5);
    if (Math.floor(((speed - 70) / 5) > 12))
        console.log('License Suspended');
}

console.log(checkSpeed(180));

// Correct Method from Mosh
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit)
        console.log('Ok');
    else {
        let points = Math.floor(((speed - speedLimit) / kmPerPoint));
        if (points >= 12)
            console.log('License Suspended');
    }
}
console.log(checkSpeed(180));