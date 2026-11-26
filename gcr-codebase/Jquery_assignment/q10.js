
$(document).ready(function () {

    // Demo list of already registered emails.
    let existingEmails = [
        "admin@gmail.com",
        "test@gmail.com",
        "user@gmail.com"
    ];

    $("#registerForm").submit(function (event) {

        // Prevent page refresh on form submission.
        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val();

        let valid = true;

        // Reset previous error styles.
        $("input").css("border", "1px solid #aaa");

        $("#message").text("").removeClass("success error");

        // Validate name.
        if (name === "") {

            $("#name").css("border", "2px solid red");

            $("#message").text("Name cannot be empty.");
            valid = false;
        }

        // Validate email using regular expression.
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            $("#email").css("border", "2px solid red");

            $("#message").text("Please enter a valid email.");
            valid = false;

        } else if (existingEmails.includes(email.toLowerCase())) {

            $("#email").css("border", "2px solid red");

            $("#message").text("Email is already registered.");
            valid = false;
        }

        // Validate password length.
        if (password.length < 8) {

            $("#password").css("border", "2px solid red");

            $("#message").text("Password must contain at least 8 characters.");
            valid = false;
        }

        // Display success if all validations pass.
        if (valid) {

            $("#message")
                .text("Registration successful! Welcome " + name)
                .removeClass("error")
                .addClass("success");

            // Add email to demo registered list.
            existingEmails.push(email.toLowerCase());

            // Clear form.
            $("#registerForm")[0].reset();
        }

    });

});
