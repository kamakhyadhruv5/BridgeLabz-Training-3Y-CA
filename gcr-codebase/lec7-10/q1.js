
"use strict";

const apiData = [
    "25", "true", "false", "NaN", " ", "100px", "3.14",
    null, undefined
];

const validNumbers = [];
const invalidNumbers = [];

// Convert every value to Number, Boolean, and String.
for (const value of apiData) {
    const numericValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    // Identify invalid numeric input.
    const isInvalid =
        Number.isNaN(numericValue) ||
        (typeof value === "string" && value.trim() === "");

    // Store invalid values separately; valid numeric values go into their array.
    if (isInvalid) {
        invalidNumbers.push(value);
    } else {
        validNumbers.push(numericValue);
    }

    // Display the conversion report.
    console.log(`Original Value: ${String(value)}`);
    console.log(`Number Form: ${numericValue}`);
    console.log(`Boolean Form: ${booleanValue}`);
    console.log(`String Form: "${stringValue}"`);
    console.log(`Status: ${isInvalid ? "Invalid Number" : "Valid Number"}`);
    console.log("-----------------------------------");
}

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);
console.log(`Valid Count: ${validNumbers.length}`);
console.log(`Invalid Count: ${invalidNumbers.length}`);
