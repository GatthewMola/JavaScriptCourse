// Create an address object that has three properties:
// street
// city
// zip code
// Then create a method that takes an address object and displays all the properties of this object along with their value.

// My Attempt:
// const address = {
//     street: 'Cold Spring',
//     city: 'Baltimore',
//     zipCode: '21209',
//     showAddress(address) {
//         for (let key in address) 
//             console.log(key, address[key]);
//     }
// };

// showAddress(address);

// Correct Method by Mosh:
const address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);

// This method works because the function is declared outside of the object. When I declared it on the inside of the object, it could not
// be called outside of it. Code is correct though!