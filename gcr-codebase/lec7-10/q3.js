
"use strict";

// Custom error classes for different transaction failures.
class NegativeAmountError extends Error {
    constructor() {
        super("Transaction amount cannot be negative.");
        this.name = "NegativeAmountError";
    }
}

class MissingFieldError extends Error {
    constructor() {
        super("Transaction ID or amount is missing.");
        this.name = "MissingFieldError";
    }
}

class NullTransactionError extends Error {
    constructor() {
        super("Transaction entry is null.");
        this.name = "NullTransactionError";
    }
}

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

// Validate each transaction independently.
for (let index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];

    try {
        if (transaction === null) {
            throw new NullTransactionError();
        }

        if (
            transaction.id === undefined ||
            transaction.amount === undefined
        ) {
            throw new MissingFieldError();
        }

        if (transaction.amount < 0) {
            throw new NegativeAmountError();
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id}: Valid`);

    } catch (error) {
        invalidTransactions.push({
            index: index,
            transaction: transaction,
            errorType: error.name,
            message: error.message
        });

        console.log(`Transaction at index ${index}: ${error.name}`);
        console.log(`Reason: ${error.message}`);
    }
}

// Print the final report.
console.log("\nValid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);
console.log(`Successful Count: ${validTransactions.length}`);
console.log(`Failed Count: ${invalidTransactions.length}`);
