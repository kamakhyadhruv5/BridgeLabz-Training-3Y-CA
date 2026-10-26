
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const auditErrors = [];
const under18Users = [];

// Parse and validate every JSON entry.
for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;

    try {
        const parsedData = JSON.parse(rawData[index]);

        // Ensure both required properties exist.
        if (
            !Object.prototype.hasOwnProperty.call(parsedData, "user") ||
            !Object.prototype.hasOwnProperty.call(parsedData, "age")
        ) {
            throw new Error("Missing required key: user or age");
        }

        // Convert age to a number and validate it.
        const age = Number(parsedData.age);

        if (!Number.isFinite(age) || age < 0) {
            throw new Error("Invalid age value");
        }

        // Store the cleaned object with numeric age.
        const cleanedUser = {
            ...parsedData,
            age: age
        };

        cleanData.push(cleanedUser);

        if (age < 18) {
            under18Users.push(cleanedUser);
        }

        console.log(`Line ${lineNumber}: Valid entry`);

    } catch (error) {
        auditErrors.push({
            line: lineNumber,
            message: error.message
        });

        console.log(`Line ${lineNumber}: Error - ${error.message}`);
    }
}

// Display the audit report.
console.log("\nClean Data:", cleanData);
console.log("Audit Errors:", auditErrors);
console.log("Under-18 Users:", under18Users);
console.log(`Valid Entries: ${cleanData.length}`);
console.log(`Failed Entries: ${auditErrors.length}`);
