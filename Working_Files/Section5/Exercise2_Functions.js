// Create two different functions - one factory, the other constructor - to initialize this address object.

const addressNull = {
    street: 'Cold Spring',
    city: 'Baltimore',
    zipCode: '21209'
};

// My Attempt:
// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
};

const address1 = createAddress('a', 'b', 'c');

// Constructor Function
function Address(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
};

const address2 = new Address('a', 'b', 'c');

// This is all correct!