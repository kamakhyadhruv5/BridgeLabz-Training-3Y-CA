
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        let avg = this.calculateAverage();

        if (avg >= 80) return "A";
        else if (avg >= 60) return "B";
        else if (avg >= 40) return "C";
        else return "F";
    }
}

let s1 = new Student("Dhruv", [85, 90, 80]);
let s2 = new Student("Rahul", [65, 70, 60]);
let s3 = new Student("Aman", [30, 35, 40]);

let students = [s1, s2, s3];

let output = "";

students.forEach(student => {
    output += `Name: ${student.name}\n`;
    output += `Average: ${student.calculateAverage().toFixed(2)}\n`;
    output += `Grade: ${student.getGrade()}\n\n`;
});

document.getElementById("output").textContent = output;
