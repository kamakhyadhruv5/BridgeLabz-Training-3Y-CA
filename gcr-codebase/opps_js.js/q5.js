
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined ||
            this.distance === null ||
            this.distance < 0) {
            throw new Error("Invalid distance. Please provide a valid distance.");
        }

        let farePerKm = 15;
        return this.distance * farePerKm;
    }
}

let driver = new Driver("Rahul", 4.8, "Swift");

let output = `Driver: ${driver.name}\n`;
output += `Rating: ${driver.rating}\n`;
output += `Vehicle: ${driver.vehicle}\n\n`;

try {
    let trip = new Trip("Aligarh", "Mathura", 35);

    output += `From: ${trip.fromLocation}\n`;
    output += `To: ${trip.toLocation}\n`;
    output += `Distance: ${trip.distance} KM\n`;
    output += `Total Fare: ₹${trip.calculateFare()}\n\n`;
} 
catch (error) {
    output += `Error: ${error.message}\n`;
}

try {
    let invalidTrip = new Trip("Aligarh", "Delhi", -10);
    invalidTrip.calculateFare();
} 
catch (error) {
    output += `Invalid Trip: ${error.message}`;
}

document.getElementById("output").textContent = output;
