
const number1 = Math.floor(Math.random() * 20) + 1;
const number2 = Math.floor(Math.random() * 20) + 1;

const operators = ["+", "-", "*", "/"];
const randomIndex = Math.floor(Math.random() * operators.length);
const operator = operators[randomIndex];

let correctAnswer;

// Calculate the answer using a switch statement.
switch (operator) {
    case "+":
        correctAnswer = number1 + number2;
        break;

    case "-":
        correctAnswer = number1 - number2;
        break;

    case "*":
        correctAnswer = number1 * number2;
        break;

    case "/":
        correctAnswer = number1 / number2;
        break;
}

// Format division answers to two decimal places.
if (operator === "/") {
    correctAnswer = correctAnswer.toFixed(2);
}

console.log(`Question: ${number1} ${operator} ${number2} = ?`);
console.log(`Correct Answer: ${correctAnswer}`);
