
const expenses = {
    food: 4000,
    travel: 2000,
    rent: 8000,
    bills: 1500,
    leisure: 1000
};

let total = 0;

// Add all category expenses.
for (const category in expenses) {
    total += expenses[category];
}

// Calculate the average expense.
const average = total / Object.keys(expenses).length;

// Add 10% tax using assignment operators.
const tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;

console.log(`Total Expenses: ₹${total.toFixed(2)}`);
console.log(`Average Expenses: ₹${average.toFixed(2)}`);
console.log(`Tax (10%): ₹${tax.toFixed(2)}`);
console.log(`Final Amount: ₹${finalAmount.toFixed(2)}`);
