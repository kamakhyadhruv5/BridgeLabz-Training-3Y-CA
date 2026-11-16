let currentStep = 1;

const steps = [
    document.getElementById("step1"),
    document.getElementById("step2"),
    document.getElementById("step3")
];

const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");

function validateStep() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (currentStep === 1 && name === "") {
        document.getElementById("error1").textContent = "Name is required";
        return false;
    }

    if (currentStep === 2 &&
        !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
        document.getElementById("error2").textContent = "Enter valid email";
        return false;
    }

    if (currentStep === 3 && password.length < 6) {
        document.getElementById("error3").textContent =
            "Password must be at least 6 characters";
        return false;
    }

    return true;
}

function showStep() {
    steps.forEach((step, index) => {
        step.hidden = index + 1 !== currentStep;
    });

    backButton.disabled = currentStep === 1;
    nextButton.textContent = currentStep === 3 ? "Finish" : "Next";
}

nextButton.addEventListener("click", function() {
    if (!validateStep()) return;

    if (currentStep < 3) {
        currentStep++;
        showStep();
    } else {
        document.getElementById("summary").hidden = false;
        document.getElementById("summary").innerHTML = `
            <h2>Registration Complete</h2>
            <p>Name: ${document.getElementById("name").value}</p>
            <p>Email: ${document.getElementById("email").value}</p>
        `;

        steps.forEach(step => step.hidden = true);
        nextButton.hidden = true;
        backButton.hidden = true;
    }
});

backButton.addEventListener("click", function() {
    if (currentStep > 1) {
        currentStep--;
        showStep();
    }
});

// Clear validation messages when the user starts correcting input.
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", function() {
        document.getElementById("error" + currentStep).textContent = "";
    });
});

showStep();