
$(document).ready(function () {

    // Hide all answers initially.
    $(".answer").hide();

    // Click question to show or hide its answer.
    $(".question").click(function () {
        $(this).next(".answer").slideToggle();
    });

    // Change question color on hover.
    $(".question").hover(
        function () {
            $(this).css("color", "green");
        },
        function () {
            $(this).css("color", "black");
        }
    );

    // Double-click any question to collapse all answers.
    $(".question").dblclick(function () {
        $(".answer").slideUp();
    });

    // Highlight parent question when input gets focus.
    $(".answer input").focus(function () {
        $(this).closest(".faq").find(".question")
            .css("background-color", "#d1fae5");
    });

    // Reset question background when input loses focus.
    $(".answer input").blur(function () {
        $(this).closest(".faq").find(".question")
            .css("background-color", "");
    });

});
