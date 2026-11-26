
$(document).ready(function () {

    let banners = $(".banner");
    let current = 0;

    // Hide a specific banner.
    $(".hide").click(function () {
        $(this).closest(".banner").hide();
    });

    // Show all hidden banners.
    $("#show").click(function () {
        banners.show();
    });

    // Slide all banners up.
    $("#slideUp").click(function () {
        banners.slideUp();
    });

    // Slide all banners down.
    $("#slideDown").click(function () {
        banners.slideDown();
    });

    // Fade out all banners.
    $("#fadeOut").click(function () {
        banners.fadeOut();
    });

    // Fade in all banners.
    $("#fadeIn").click(function () {
        banners.fadeIn();
    });

    // Automatically rotate banners every 5 seconds.
    // Only one banner is displayed at a time during rotation.
    banners.hide();
    banners.eq(0).fadeIn();

    setInterval(function () {
        banners.eq(current).fadeOut(500, function () {
            current = (current + 1) % banners.length;
            banners.eq(current).fadeIn(500);
        });
    }, 5000);

});
