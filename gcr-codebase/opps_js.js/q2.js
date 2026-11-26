
let menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 100 }
];

function calculateBill(orderItems) {
    let prices = orderItems.map(item => {
        let food = menu.find(m => m.name === item);

        if (!food) {
            throw new Error(`Invalid food item: ${item}`);
        }

        return food.price;
    });

    let total = prices.reduce((sum, price) => sum + price, 0);

    return total;
}

let output = "";

try {
    let order = ["Pizza", "Burger", "Pasta"];

    let bill = calculateBill(order);

    output += `Order: ${order.join(", ")}\n`;
    output += `Total Bill: ₹${bill}`;
} 
catch (error) {
    output = `Error: ${error.message}`;
}

document.getElementById("output").textContent = output;
