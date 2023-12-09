// Finish this function that displays a certain number of stars (*) depending on the row number in the terminal iteration.

// Correct Method by Mosh: Creating a nested loop (will be seen in many algorithms)
showStars(5);

function showStars(rows) {
    for (row = 1 ; row <= rows; row++) {
        let pattern = ''; // This first for loop will create a blank row that will then be filled in by the next for loop
        for (i = 0; i < row; i++)
            pattern += '*'; // This for loop fills in a corresponding number of stars to the row according to the row iteration number.
        console.log(pattern);
    }
}