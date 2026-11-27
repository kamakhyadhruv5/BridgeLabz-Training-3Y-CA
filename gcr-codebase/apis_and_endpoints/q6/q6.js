
const API = "http://localhost:3006/users";

const form = document.getElementById("registerForm");
const message = document.getElementById("message");
const button = document.getElementById("registerBtn");

// Handle registration form submission.
form.addEventListener("submit", async function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    message.textContent = "";
    message.className = "";

    button.disabled = true;
    button.textContent = "Checking...";

    try {

        // STEP 1: Check whether email already exists.
        let checkResponse = await axios.get(API, {
            params: {
                email: email
            }
        });

        let existingUsers = checkResponse.data;

        // STEP 2: Reject duplicate email.
        if (existingUsers.length > 0) {

            message.textContent = "Email already registered.";
            message.className = "error";

            return;
        }

        // STEP 3: Register new user using POST.
        let newUser = {
            name: name,
            email: email,
            password: password
        };

        let response = await axios.post(API, newUser);

        // STEP 4: Display success message.
        if (response.status === 201) {

            message.textContent = "Registration successful! Welcome " + name;

            message.className = "success";

            form.reset();
        }

    } catch (error) {

        message.textContent = "Registration failed. Please try again.";

        message.className = "error";

        console.error(error);

    } finally {

        // Enable button after request finishes.
        button.disabled = false;
        button.textContent = "Register";

    }

});
