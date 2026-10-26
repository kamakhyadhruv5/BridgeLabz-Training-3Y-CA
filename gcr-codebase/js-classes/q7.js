

const loginForm = document.getElementById("loginForm");

const usernamePattern = /^.{5,}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/;

loginForm.addEventListener("submit", event => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const errors = [];

    // Validate username length.
    if (!usernamePattern.test(username)) {
        errors.push("Username must contain at least 5 characters.");
    }

    // Validate all password requirements.
    if (!passwordPattern.test(password)) {
        errors.push(
            "Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character."
        );
    }

    if (errors.length > 0) {
        message.textContent = errors.join(" ");
        message.className = "error";
    } else {
        message.textContent = "Validation successful!";
        message.className = "success";
    }
});
