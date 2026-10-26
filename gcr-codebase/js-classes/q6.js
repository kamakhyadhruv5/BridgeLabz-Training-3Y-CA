

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Calculate the annual salary before bonuses.
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Increase the monthly salary by the specified percentage.
    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Amit", "HR", 30000),
    new Employee(2, "Sara", "Finance", 40000),
    new Employee(3, "Kiran", "IT", 50000),
    new Employee(4, "Neha", "Marketing", 35000),
    new Employee(5, "Rahul", "Sales", 45000)
];

// Apply a 10% bonus to each employee's monthly salary.
employees.forEach(employee => employee.applyBonus(10));

// Display employee details and annual salaries.
employees.forEach(employee => {
    console.log(
        `ID: ${employee.id} | Name: ${employee.name} | Department: ${employee.department} | Annual Salary: ₹${employee.getAnnualSalary().toFixed(2)}`
    );
});

// Calculate the total annual payout after bonuses.
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log(`\nTotal Annual Company Payout: ₹${totalAnnualPayout.toFixed(2)}`);
