
"use strict";

// Custom error for an unsupported operation.
class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Invalid operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;
const operation = "divide"; // Change to test other operations.

try {
    let result;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;

        case "divide":
            if (num2 === 0) {
                throw new Error("Cannot divide by zero.");
            }
            result = num1 / num2;
            break;

        case "power":
            result = Math.pow(num1, num2);
            break;

        case "root":
            if (num1 < 0) {
                throw new Error("Cannot take the real square root of a negative number.");
            }
            result = Math.sqrt(num1);
            break;

        case "subtract":
            result = num1 - num2;
            break;

        default:
            throw new InvalidOperationError(operation);
    }

    console.log("Calculator Summary");
    console.log("-------------------");
    console.log(`Operation: ${operation}`);
    console.log(`Number 1: ${num1}`);
    console.log(`Number 2: ${num2}`);
    console.log(`Result: ${result}`);

} catch (error) {
    console.log("Calculator Summary");
    console.log("-------------------");
    console.log(`Operation: ${operation}`);
    console.log(`Error Type: ${error.name}`);
    console.log(`Error Message: ${error.message}`);
}
