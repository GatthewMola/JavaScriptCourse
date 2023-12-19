// Create a circle object using the object literal syntax.
// This object should have a radius property that we can read or write to.
// It should also have an area proprty that we can only read.

// My Attempt:
const circle = function(radius) {
    this.radius = radius;
    this.area = (Math.PI * (radius**2));
};

console.log(circle(2));

// Mosh Method:
const circle1 = {
    radius: 4,
    get area() {
        return Math.PI * (this.radius**2);
    }
};

console.log(circle1.area);
// Need to brush up on my object literal syntax lol