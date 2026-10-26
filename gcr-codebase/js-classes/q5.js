


const bookingForm = document.getElementById("bookingForm");

const namePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

bookingForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);

    const message = document.getElementById("message");
    const ticket = document.getElementById("ticket");

    // Validate the booking details.
    if (!namePattern.test(name)) {
        message.textContent = "Name must contain alphabets only.";
        message.className = "error";
        ticket.textContent = "";
        return;
    }

    if (!emailPattern.test(email)) {
        message.textContent = "Enter a valid email address.";
        message.className = "error";
        ticket.textContent = "";
        return;
    }

    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        message.textContent = "Seats must be between 1 and 10.";
        message.className = "error";
        ticket.textContent = "";
        return;
    }

    // Store the validated booking.
    const booking = { name, email, seats };

    message.textContent = "Booking successful!";
    message.className = "success";
    ticket.textContent =
        `MOVIE TICKET\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
});
