


class FormBuilder {
    constructor(fields, containerId) {
        this.fields = fields;
        this.container = document.getElementById(containerId);
    }

    // Build a form using the supplied field definitions.
    createForm() {
        const fieldsHTML = this.fields.map(field => `
            <label for="${field.name}">${field.label}</label>
            <input
                type="${field.type}"
                id="${field.name}"
                name="${field.name}"
                required
            >
            <br><br>
        `).join("");

        this.container.innerHTML = `
            <form id="dynamicForm">
                ${fieldsHTML}
                <button type="submit">Submit</button>
            </form>
        `;

        document.getElementById("dynamicForm")
            .addEventListener("submit", event => {
                event.preventDefault();

                const formData = this.getFormData();
                document.getElementById("output").textContent =
                    JSON.stringify(formData, null, 2);
            });
    }

    // Collect entered values into an object.
    getFormData() {
        const formData = {};

        this.fields.forEach(field => {
            const input = document.getElementById(field.name);
            formData[field.name] = input.value;
        });

        return formData;
    }
}

const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

const formBuilder = new FormBuilder(fields, "formContainer");
formBuilder.createForm();
