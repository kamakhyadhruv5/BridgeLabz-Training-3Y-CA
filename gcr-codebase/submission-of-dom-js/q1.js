const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

function addProduct() {
    const productName = productInput.value.trim();

    if (productName === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${productName}</span>
        <button data-action="edit">Edit</button>
        <button data-action="delete" class="delete">Delete</button>
    `;

    productList.appendChild(li);
    productInput.value = "";
}

addButton.addEventListener("click", addProduct);

productInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") addProduct();
});

// Event delegation handles Edit and Delete on the parent UL.
productList.addEventListener("click", function(event) {
    const action = event.target.dataset.action;
    const li = event.target.closest("li");

    if (!li) return;

    if (action === "delete") {
        li.remove();
    }

    if (action === "edit") {
        const span = li.querySelector("span");

        if (li.querySelector("input")) return;

        const input = document.createElement("input");
        input.value = span.textContent;

        span.replaceWith(input);
        input.focus();
    }
});

// Save editing automatically when clicking outside the edited item.
document.addEventListener("click", function(event) {
    const input = productList.querySelector("li input");

    if (input && !input.closest("li").contains(event.target)) {
        const span = document.createElement("span");
        span.textContent = input.value.trim() || "Untitled product";
        input.replaceWith(span);
    }
});