
const API = "http://localhost:3002/employees";

const employeeList = document.getElementById("employeeList");
const message = document.getElementById("message");

// Fetch employees using XMLHttpRequest.
function loadEmployees() {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", API, true);

    xhr.onload = function () {

        if (xhr.status === 200) {

            let employees = JSON.parse(xhr.responseText);

            employeeList.innerHTML = "";

            employees.forEach(function (employee) {

                let row = document.createElement("article");
                row.className = "employee";

                row.innerHTML = `
                    <h3>${employee.name}</h3>

                    <div>
                        <span class="${employee.status}">
                            ${employee.status.toUpperCase()}
                        </span>

                        <button data-id="${employee.id}">
                            Toggle Status
                        </button>
                    </div>
                `;

                employeeList.appendChild(row);
            });

        } else {
            message.textContent = "Unable to load employees.";
        }
    };

    xhr.onerror = function () {
        message.textContent = "Network error while loading employees.";
    };

    xhr.send();
}

// Toggle employee status.
function toggleStatus(button) {

    let id = button.dataset.id;

    let row = button.closest(".employee");
    let statusElement = row.querySelector("span");

    let oldStatus = statusElement.textContent.toLowerCase();

    let newStatus = oldStatus === "active" ? "inactive" : "active";

    // Immediately update the UI (optimistic update).
    statusElement.textContent = newStatus.toUpperCase();
    statusElement.className = newStatus;

    button.disabled = true;
    message.textContent = "";

    let xhr = new XMLHttpRequest();

    xhr.open("PATCH", API + "/" + id, true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {

        button.disabled = false;

        if (xhr.status >= 200 && xhr.status < 300) {

            message.textContent = "Employee status updated successfully.";

        } else {

            // Revert UI if server rejects the request.
            statusElement.textContent = oldStatus.toUpperCase();
            statusElement.className = oldStatus;

            message.textContent = "Failed to update status. Please try again.";
        }
    };

    xhr.onerror = function () {

        button.disabled = false;

        // Revert UI if network request fails.
        statusElement.textContent = oldStatus.toUpperCase();
        statusElement.className = oldStatus;

        message.textContent = "Network error. Status has been reverted.";
    };

    xhr.send(JSON.stringify({
        status: newStatus
    }));
}

// Event delegation for toggle buttons.
employeeList.addEventListener("click", function (event) {

    if (event.target.tagName === "BUTTON") {
        toggleStatus(event.target);
    }

});

// Load data when page opens.
loadEmployees();
