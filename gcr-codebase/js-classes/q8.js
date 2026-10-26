


// Initial user object.
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const userForm = document.getElementById("userForm");
const userOutput = document.getElementById("userOutput");

// Load the existing object values into the form.
document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("age").value = user.age;

// Display the current object.
function displayUser() {
    userOutput.textContent = JSON.stringify(user, null, 2);
}

userForm.addEventListener("submit", event => {
    event.preventDefault();

    // Update the existing object with form values.
    user.name = document.getElementById("name").value.trim();
    user.email = document.getElementById("email").value.trim();
    user.age = Number(document.getElementById("age").value);

    // Display the updated object immediately.
    displayUser();
    console.log("Updated User:", user);
});

displayUser();
