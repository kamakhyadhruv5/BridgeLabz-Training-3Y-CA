
"use strict";

// Create a Product class.
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply a percentage discount to the product price.
    applyDiscount(percent) {
        this.price -= this.price * percent / 100;
    }

    // Return formatted product details.
    displayDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

// Create multiple product objects.
const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Headphones", 1500, "Accessories"),
    new Product(3, "Notebook", 100, "Stationery"),
    new Product(4, "Keyboard", 2500, "Electronics")
];

// Apply a 10% discount to the headphones.
products[1].applyDiscount(10);

console.log("All Products:");
products.forEach(product => console.log(product.displayDetails()));

// Filter products with price greater than ₹1000.
const expensiveProducts = products.filter(product => product.price > 1000);

console.log("\nProducts Above ₹1000:");
expensiveProducts.forEach(product => console.log(product.displayDetails()));
