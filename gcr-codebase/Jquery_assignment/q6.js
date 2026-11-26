
$(document).ready(function () {

    // Attach events using on() so dynamically added topics also work.
    $("#subscriptions").on("click", ".subscribe", function () {

        let topic = $(this).siblings("span").text();

        // Prevent repeated subscriptions.
        if ($(this).text() === "Subscribed") {
            $("#message").text("Already subscribed to " + topic);
            return;
        }

        $(this).text("Subscribed").css("background", "green");

        $("#message").text("Successfully subscribed to " + topic);
    });

    // Unsubscribe from a topic.
    $("#subscriptions").on("click", ".unsubscribe", function () {

        let topic = $(this).siblings("span").text();

        let subscribeButton = $(this).siblings(".subscribe");

        subscribeButton.text("Subscribe").css("background", "#334155");

        $("#message").text("Unsubscribed from " + topic);
    });

    // Dynamically add a new subscription topic.
    $("#addTopic").click(function () {

        let topic = $("#topicInput").val().trim();

        if (topic === "") {
            $("#message").text("Please enter a topic.");
            return;
        }

        let newTopic = `
            <article class="item">
                <span>${$("<div>").text(topic).html()}</span>
                <button class="subscribe">Subscribe</button>
                <button class="unsubscribe">Unsubscribe</button>
            </article>
        `;

        $("#subscriptions").append(newTopic);

        $("#topicInput").val("");

        $("#message").text("New topic added successfully!");
    });

    // Remove the event handler from a particular button.
    // Demonstration: clicking this button removes the unsubscribe event.
    $("#subscriptions").on("dblclick", ".unsubscribe", function () {

        $(this).off("click");

        $("#message").text("Unsubscribe button event detached for this item.");
    });

});
