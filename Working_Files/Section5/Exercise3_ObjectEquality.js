// Create two functions: areEqual and areSame

const address1 = new Address('a', 'b', 'c');
const address2 = new Address('a', 'b', 'c');

function Address(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
};

// My Attempt:
function areEqual(address1, address2) { // If all the properties of these objects are equal, the function should return true.
    if (Object.keys(address1) === Object.keys(address2));
    else false;
};
console.log(areEqual(address1, address2));
// Even if this code was written as a return statement instead of an if, it would have returned false. It simply doesn't work.

function areSame(address1, address2) { // If both objects are referencing the same object, the function should return true.
    if(address1 === address2);
    else false;
};
console.log(areSame(address1, address2));

// Correct Method by Mosh:
function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}

console.log(areEqual(address1, address2));
// Need to be more specific in my code next time.

function areSame(address1, address2) {
    return address1 === address2;
}
console.log(areSame(address1, address2));
// Was going in the right direction here, need to remember it's not always that complicated.