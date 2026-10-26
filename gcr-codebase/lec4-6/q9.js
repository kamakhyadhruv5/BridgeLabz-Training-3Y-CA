
const numbers = [];
const results = [];

// Store numbers from 1 to 30.
for (let number = 1; number <= 30; number++) {
    numbers.push(number);
}

// Classify each number.
for (const number of numbers) {
    let result;

    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    } else if (number % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    results.push({
        Number: number,
        Result: result
    });
}

// Display all results.
console.table(results);
