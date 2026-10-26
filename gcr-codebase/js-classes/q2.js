
"use strict";

const form = document.getElementById("studentForm");

const validators = {
    name: /^[A-Za-z]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/
};

const messages = {
    name: "Name must contain alphabets only.",
    email: "Enter a valid email address.",
    phone: "Phone must contain exactly 10 digits.",
    password: "Password needs uppercase, number, and special character."
};

// Validate one field and update its border and error message.
function validateField(fieldName) {
    const input = document.getElementById(fieldName);
    const error = document.getElementById(`${fieldName}Error`);
    const isValid = validators[fieldName].test(input.value);

    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
    error.textContent = isValid ? "" : messages[fieldName];

    return isValid;
}

Object.keys(validators).forEach(fieldName => {
    document.getElementById(fieldName).addEventListener("input", () => {
        validateField(fieldName);
    });
});

form.addEventListener("submit", event => {
    event.preventDefault();

    const allValid = Object.keys(validators)
        .map(validateField)
        .every(Boolean);

    document.getElementById("result").textContent = allValid
        ? "Registration successful!"
        : "Please correct the highlighted fields.";
});
