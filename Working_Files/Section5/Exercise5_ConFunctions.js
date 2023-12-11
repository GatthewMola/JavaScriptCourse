// Imagine we're building a blogging engine. The user is drafting a post but they ahve not published it yet.
// Create a constructor function that produces blog posts.

const BlogPost2 = {
    title: 'Coding',
    body: 'We are coding',
    author: 'Mike Cook',
    views: 100,
    comments: [
        {author: 'Matt Gola', body: 'Nice'},
        {author: 'Matt Gola', body: 'W'}
    ],
    isLive: true
}

// My Attempt:
function CreateBlogPost1(title, body, author, views, comments, isLive) {
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = views,
    this.comments = comments.array,
    this.isLive = isLive
};

const post1 = new CreateBlogPost1('Coding', 'We are Coding', 'Mike Cook', 100, 'Matt Gola', true);

console.log(post1);

// Correct Method by Mosh:
function CreateBlogPost2(title, body, author) { // We do not include parameter in parentheses that are not recieving real or truthy values.
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0; // Values in purple are default values that will not receive user input in parantheses.
    this.comments = []; 
    this.isLive = false;
};

const post2 = new CreateBlogPost2();

console.log(post2);

// __Notes__
// When a new blog post is made, it will have zero views. So instead of declaring the parameter as equal to views, it will be equal to 0.
// Everytime we view the post we increment that value.
// The same thing goes for the comments property. There will be no comments on a new post so we will simply set the parameter to an empty array.
// Again, for a post that has not been written yet, isLive will be false by default, so there's not reason to add it.
// Some advice from Mosh:
    // Try to create functions with fewer parameters. The more parameters a function has, the harder it gets to use it.