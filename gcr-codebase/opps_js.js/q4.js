
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is working in ${this.department} department.`;
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    work() {
        return `${this.name} is managing the ${this.department} department.`;
    }
}

let emp1 = new Employee("Rahul", "IT");
let emp2 = new Manager("Dhruv", "Development");

let employees = [emp1, emp2];

let output = "";

employees.forEach(emp => {
    output += emp.work() + "\n";
});

output += "\nRuntime Polymorphism: The same work() method produces different outputs depending on the object.";

document.getElementById("output").textContent = output;
