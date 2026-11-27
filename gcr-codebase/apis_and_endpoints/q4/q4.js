
async function loadDashboardWithPromiseAll() {

    const BASE = "http://localhost:3004";

    const urls = [
        BASE + "/users",
        BASE + "/orders",
        BASE + "/products"
    ];

    try {
        const responses = await Promise.all(
            urls.map(url => fetch(url))
        );

        if (responses.some(response => !response.ok)) {
            throw new Error("One or more APIs failed.");
        }

        const [users, orders, products] = await Promise.all(
            responses.map(response => response.json())
        );

        document.getElementById("users").textContent = users.length;
        document.getElementById("orders").textContent = orders.length;
        document.getElementById("products").textContent = products.length;

    } catch (error) {

        document.getElementById("warning").textContent =
            "Some data could not be loaded.";
    }
}
