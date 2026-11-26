
$(document).ready(function () {

    // Display greeting according to current time.
    let hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 17) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    $("#greeting").text(greeting);

    // Change greeting to a motivational quote.
    $("#changeGreeting").click(function () {
        $("#greeting").text("Believe in yourself and never give up!");

        // Show alert when greeting is clicked.
        alert("Your greeting has been changed!");
    });

    // Toggle welcome message visibility.
    $("#toggleMessage").click(function () {
        $("#welcomeMessage").toggle();
    });

    // Alert when the greeting itself is clicked.
    $("#greeting").click(function () {
        alert("Have a wonderful day!");
    });

});
