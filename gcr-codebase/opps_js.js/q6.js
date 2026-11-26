
let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mobile", category: "Electronics", price: 20000, stock: 3 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1000, stock: 20 },
    { id: 4, name: "Jeans", category: "Clothing", price: 1500, stock: 4 },
    { id: 5, name: "Table", category: "Furniture", price: 5000, stock: 2 }
];

function getLowStockProducts() {
    return products.filter(product => product.stock < 5);
}

function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
    return products.reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);
}

function groupByCategory() {
    return products.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product.name);

        return groups;
    }, {});
}

let output = "Low Stock Products:\n";

getLowStockProducts().forEach(p => {
    output += `${p.name} - Stock: ${p.stock}\n`;
});

output += "\nProducts Sorted By Price:\n";

sortProductsByPrice().forEach(p => {
    output += `${p.name} - ₹${p.price}\n`;
});

output += `\nTotal Inventory Value: ₹${calculateTotalInventoryValue()}\n`;

output += "\nProducts Grouped By Category:\n";

let groups = groupByCategory();

for (let category in groups) {
    output += `${category}: ${groups[category].join(", ")}\n`;
}

document.getElementById("output").textContent = output;
