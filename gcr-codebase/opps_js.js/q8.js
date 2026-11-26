
class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function() {
    return `Movie: ${this.movieName}\nSeat: ${this.seatNo}\nTicket Price: ₹${this.price}`;
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

let ticket1 = new OnlineTicket("Avengers", "A12", 250, 30);
let ticket2 = new OnlineTicket("Avatar", "B15", 300, 40);

let output = "";

output += ticket1.printTicket() + "\n";
output += `Convenience Fee: ₹${ticket1.convenienceFee}\n`;
output += `Total Amount: ₹${ticket1.getTotalAmount()}\n\n`;

output += ticket2.printTicket() + "\n";
output += `Convenience Fee: ₹${ticket2.convenienceFee}\n`;
output += `Total Amount: ₹${ticket2.getTotalAmount()}\n\n`;

output += "Prototype Chain: OnlineTicket inherits from MovieTicket, so its objects can access printTicket().";

document.getElementById("output").textContent = output;
