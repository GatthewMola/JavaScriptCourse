// Finish a function called showProperties. This function should display all string properties of a passed object.

// My Attempt: Looks like it's gonna be a For/In loop
const movie = {
    title: 'Alien',
    releaseYear: 1979,
    rating: 8.5,
    director: 'Ridley Scott'
};

function showProperties(obj) {
    for (let key in obj) // This for statement can also be put in curly braces but that's just a personal preference.
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}

showProperties(movie);