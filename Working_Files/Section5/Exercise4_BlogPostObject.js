// Create a BlogPost object with the following properties:
// title, body, author, views, comments (which includes their own author and body), and isLive (boolean)

// My Attempt:
const BlogPost1 = {
    title: 'Coding',
    body: 'We are coding',
    author: 'Mike Cook',
    views: 100,
    comments: {
        author: 'Matt Gola', // The syntax I used in this 'comment' property still displayed the same result as the syntax below.
        body: 'Nice' // Need to confirm best practice with Mike.
    },
    isLive: true
};

console.log(BlogPost1);

// Correct Method by Mosh:

const BlogPost2 = {
    title: 'Coding',
    body: 'We are coding',
    author: 'Mike Cook',
    views: 100,
    comments: [ // This should be an array in brackets, not curly braces.
        {author: 'Matt Gola', body: 'Nice'}, // Correct syntax for arrayed properties in an object. Good to know.
        {author: 'Matt Gola', body: 'W'}
    ],
    isLive: true
}

console.log(BlogPost2);