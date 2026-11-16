const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maxLength = 100;

message.addEventListener("input", function() {
    const remaining = maxLength - message.value.length;

    counter.textContent = remaining + " characters remaining";

    counter.classList.remove("warning", "limit");

    if (remaining <= 20 && remaining > 0) {
        counter.classList.add("warning");
    }

    if (remaining === 0) {
        counter.classList.add("limit");
    }
});

// Prevent additional typing when the limit is reached.
message.addEventListener("keydown", function(event) {
    const allowedKeys = [
        "Backspace", "Delete", "ArrowLeft",
        "ArrowRight", "Tab", "Home", "End"
    ];

    if (message.value.length >= maxLength &&
        !allowedKeys.includes(event.key) &&
        !(event.ctrlKey || event.metaKey)) {
        event.preventDefault();
    }
});

resetButton.addEventListener("click", function() {
    message.value = "";
    counter.textContent = "100 characters remaining";
    counter.className = "";
});