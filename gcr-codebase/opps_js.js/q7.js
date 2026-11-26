
class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive.");
        }

        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance.");
        }

        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount(5000);
let output = `Initial Balance: ₹${account.getBalance()}\n\n`;

try {
    account.deposit(2000);
    output += "Deposited ₹2000 successfully.\n";
    output += `Balance: ₹${account.getBalance()}\n\n`;
} 
catch (error) {
    output += `Error: ${error.message}\n`;
}

try {
    account.withdraw(10000);
    output += "Withdrawal successful.\n";
} 
catch (error) {
    output += `Withdrawal Error: ${error.message}\n`;
}

output += `\nFinal Balance: ₹${account.getBalance()}`;

document.getElementById("output").textContent = output;
