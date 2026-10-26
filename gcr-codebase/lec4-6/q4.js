
const scores = [];

// Generate 8 random scores between 30 and 100.
for (let i = 0; i < 8; i++) {
    const score = Math.floor(Math.random() * 71) + 30;
    scores.push(score);
}

// Calculate highest, lowest, and average scores.
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;

// Find students who passed.
const passedStudents = scores.filter(score => score >= 50);

// Create a formatted list of scores.
const formattedScores = scores.map((score, index) => ({
    Student: index + 1,
    Score: score,
    Result: score >= 50 ? "Pass" : "Fail"
}));

console.table(formattedScores);

console.log(`
Performance Summary
-------------------
Highest Score: ${highestScore}
Lowest Score: ${lowestScore}
Average Score: ${averageScore.toFixed(2)}
Students Passed: ${passedStudents.length}
Total Students: ${scores.length}
`);
