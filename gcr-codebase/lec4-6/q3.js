
const x = 16.75;

// Perform mathematical operations.
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cube = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

// Display the results.
console.log(`
Math Utility Dashboard
----------------------
Original Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot.toFixed(2)}
Power (x³): ${cube.toFixed(2)}
Random Number (10-50): ${randomNumber}
`);
