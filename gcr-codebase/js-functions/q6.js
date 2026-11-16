
function Person(name) {
    this.name = name;
}

Person.prototype.showPerson = function() {
    console.log("Name: " + this.name);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showFaculty = function() {
    console.log("Department: " + this.department);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showProfessor = function() {
    console.log("Subject: " + this.subject);
};

const professor1 = new Professor(
    "Rahul",
    "Computer Science",
    "JavaScript"
);

professor1.showPerson();
professor1.showFaculty();
professor1.showProfessor();
