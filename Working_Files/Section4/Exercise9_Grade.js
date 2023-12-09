// Finish this function to calculate the grade for a student.
// This function should calculate the average of the marks, the asign a grade based on the average.
// Grades based on average:
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

// My Attempt:
const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    let sum = 0;
    let average = 0;
    for (let mark of marks) {
        sum += mark;
        return average = (sum/mark.length);
    }
    if (1 <= average <= 59)
        console.log('F');
    else if (60 <= average <= 69)
        console.log('D');
    else if (70 <= average <= 79)
        console.log('C');
    else if (80 <= average <= 89)
        console.log('B');
    else if (90 <= average <= 100)
        console.log('A');
}

// Correct Method by Mosh:
const array = [80, 80, 50];

console.log(calculateGrade(array));

function calculateGrade(marks) {
    let sum = 0;
    for (let mark of marks)
        sum += mark;
    let average = sum / marks.length; // The .length function will provide the number of elements in an array.

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

// We can make this calculateGrade function cleaner by breaking up the actions inside it into separate function.
function calculateAverage(array) {
    let sum = 0;
    for (let mark of array)
        sum += mark;
    return sum / array.length;
}

function calculateGrade(marks) {
    const average = calculateAverage;
    
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}