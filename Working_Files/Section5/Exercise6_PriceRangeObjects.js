// We want to create price range objects in this exercise.
    // Such as the prices ranges found on Yelp (inexpensive, moderate, pricey).
// Create an array of price range objects.
// Think about the properties that each object should have.

// My Attempt:
const prices = [
    {
        floor: 0,
        ceiling: 10
    },
    {
        floor: 11,
        ceiling: 20
    },
    {
        floor: 21,
        ceiling: 30
    }
];

console.log(prices);

// Correct Method by Mosh: (Other than the syntax differences and the added parameters, I'm actually pretty close!)
let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 11, maxPerPerson: 20},
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 21, maxPerPerson: 50}
];

let restaurants = [
    {averagePerPerson: 5}
]

console.log(priceRanges);