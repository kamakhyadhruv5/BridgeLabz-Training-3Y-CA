


class Cart {
    constructor() {
        this.items = [];
    }

    // Add an item to the shopping cart.
    addItem(name, price, quantity) {
        if (price < 0 || quantity <= 0) {
            console.log("Invalid price or quantity.");
            return;
        }

        this.items.push({ name, price, quantity });
    }

    // Calculate the total before discount.
    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    // Validate coupon and calculate the discounted total.
    applyCoupon(coupon) {
        const couponPattern = /^(SAVE|DISC)(\d+)$/;
        const match = coupon.match(couponPattern);

        if (!match) {
            console.log("Invalid coupon format.");
            return this.getTotal();
        }

        const discountPercent = Number(match[2]);

        // Accept discounts from 1% to 100%.
        if (discountPercent < 1 || discountPercent > 100) {
            console.log("Coupon discount must be between 1% and 100%.");
            return this.getTotal();
        }

        const originalTotal = this.getTotal();
        const discount = originalTotal * discountPercent / 100;
        const finalTotal = originalTotal - discount;

        console.log(`Original Total: ₹${originalTotal.toFixed(2)}`);
        console.log(`Coupon: ${coupon}`);
        console.log(`Discount: ${discountPercent}%`);
        console.log(`Discount Amount: ₹${discount.toFixed(2)}`);
        console.log(`Final Total: ₹${finalTotal.toFixed(2)}`);

        return finalTotal;
    }

    // Display all cart items.
    displayCart() {
        console.log("Shopping Cart:");

        this.items.forEach(item => {
            console.log(
                `${item.name} | Price: ₹${item.price} | Quantity: ${item.quantity} | Subtotal: ₹${(item.price * item.quantity).toFixed(2)}`
            );
        });
    }
}

// Create a cart and add products.
const cart = new Cart();

cart.addItem("Laptop", 45000, 1);
cart.addItem("Mouse", 800, 2);
cart.addItem("Keyboard", 1500, 1);

cart.displayCart();

// Test the coupon.
console.log("");
cart.applyCoupon("SAVE20");
