
let currentSalary = 30000;
const annualIncrementRate = 10;
const salaryReport = [];

// Calculate salary for each of the next five years.
for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * annualIncrementRate / 100;

    salaryReport.push({
        Year: year,
        Salary: Number(currentSalary.toFixed(2))
    });
}

// Display yearly salaries in a formatted table.
console.table(salaryReport);
