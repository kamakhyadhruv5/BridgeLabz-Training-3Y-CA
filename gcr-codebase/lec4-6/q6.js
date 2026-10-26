
let count = 0;

// Increase the counter.
function increment() {
    count++;
    console.log(`Count after increment: ${count}`);

    // Nested function accesses the outer function's scope.
    function showCount() {
        console.log(`Current count inside nested function: ${count}`);
    }

    showCount();
}

// Decrease the counter.
function decrement() {
    count--;
    console.log(`Count after decrement: ${count}`);
}

// Simulate click events by calling the functions.
increment();
increment();
increment();
decrement();
decrement();

console.log(`Final Count: ${count}`);
