const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const options = document.getElementById("options");

// Open and close dropdown.
dropdownButton.addEventListener("click", function() {
    options.hidden = !options.hidden;
});

// Select an option.
options.addEventListener("click", function(event) {

    if (event.target.tagName === "LI") {
        dropdownButton.textContent = event.target.textContent;
        options.hidden = true;
    }

});

// Close dropdown when clicking outside using capturing phase.
document.addEventListener("click", function(event) {

    if (!dropdown.contains(event.target)) {
        options.hidden = true;
    }

}, true);