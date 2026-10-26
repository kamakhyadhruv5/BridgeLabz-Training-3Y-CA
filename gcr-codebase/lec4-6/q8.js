
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate the original cart value.
const originalTotal = cart.reduce(
    (total, product) => total + product.price,
    0
);

let discountedTotal = 0;

// Apply category-specific discounts.
for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discountedPrice = product.price * (1 - discountRate);
    discountedTotal += discountedPrice;

    console.log(
        `${product.item}: ₹${product.price} → ₹${discountedPrice.toFixed(2)}`
    );
}

// Apply an extra 5% discount if the original cart value exceeds ₹50,000.
if (originalTotal > 50000) {
    discountedTotal *= 0.95;
}

console.log(`Original Cart Total: ₹${originalTotal.toFixed(2)}`);
console.log(`Final Cart Total: ₹${discountedTotal.toFixed(2)}`);
console.log(
    `Total Savings: ₹${(originalTotal - discountedTotal).toFixed(2)}`
);
