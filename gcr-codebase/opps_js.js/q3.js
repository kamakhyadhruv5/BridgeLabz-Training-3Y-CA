
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    let discount = (this.price * percent) / 100;
    return this.price - discount;
};

let p1 = new Product("Laptop", 50000);
let p2 = new Product("Mobile", 20000);
let p3 = new Product("Headphones", 5000);

let output = "";

output += `${p1.name}: Original ₹${p1.price}, After 10% Discount ₹${p1.applyDiscount(10)}\n`;

output += `${p2.name}: Original ₹${p2.price}, After 20% Discount ₹${p2.applyDiscount(20)}\n`;

output += `${p3.name}: Original ₹${p3.price}, After 15% Discount ₹${p3.applyDiscount(15)}\n`;

output += "\nAbstraction: The user only calls applyDiscount() without knowing the internal discount calculation.";

document.getElementById("output").textContent = output;
