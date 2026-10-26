
let bonus = 5000; // Global variable

function calculateSalary(isPermanent) {
    let salary = 40000; // Local variable

    // Add bonus only for permanent employees.
    if (isPermanent === true) {
        salary += bonus;
    }

    console.log(`Permanent Employee: ${isPermanent}`);
    console.log(`Total Salary: ₹${salary}`);
}

// Test both conditions.
calculateSalary(true);
calculateSalary(false);

// Global bonus remains unchanged.
console.log(`Global Bonus: ₹${bonus}`);
