
"use strict";

function demo(firstNumber, secondNumber) {
    let total = 10;

    console.log(`First Number: ${firstNumber}`);
    console.log(`Second Number: ${secondNumber}`);
    console.log(`Total: ${total}`);

    // Update the variable instead of deleting it.
    total = 0;

    console.log(`Updated Total: ${total}`);
}

demo(5, 10);
