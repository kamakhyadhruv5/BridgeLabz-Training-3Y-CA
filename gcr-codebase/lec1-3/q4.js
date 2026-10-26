
const marks = [90, 85, 88, 92, 80];

// Calculate total marks.
const total = marks.reduce((sum, mark) => sum + mark, 0);

// Calculate average and percentage for subjects out of 100.
const average = total / marks.length;
const percentage = (total / (marks.length * 100)) * 100;

// Check whether any subject has marks below 35.
const hasFailed = marks.some(mark => mark < 35);

// Evaluate academic performance.
if (hasFailed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85 && !hasFailed) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}

console.log(`Total Marks: ${total}`);
console.log(`Average Marks: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
