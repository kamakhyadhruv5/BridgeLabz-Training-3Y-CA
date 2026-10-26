
const userName = "Dhruv";
const age = 20;
const isLoggedIn = true;
const subjects = ["JavaScript", "Python", "Java"];
const user = { name: "Dhruv", city: "Agra" };
const address = null;
let phoneNumber;

const report = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Logged In", Value: isLoggedIn, Type: typeof isLoggedIn },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "User Object", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Address", Value: String(address), Type: String(address) === "null" ? "null" : typeof address },
    { Label: "Phone Number", Value: String(phoneNumber), Type: typeof phoneNumber }
];

// Print all entries in a single table.
console.table(report);
