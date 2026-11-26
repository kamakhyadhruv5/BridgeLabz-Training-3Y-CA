
$(document).ready(function () {

    // Hide additional details initially.
    $(".details").hide();

    // Highlight product when clicked.
    $(".product").click(function () {
        $(this).toggleClass("highlight");
    });

    // Show details on hover and hide when mouse leaves.
    $(".product").hover(
        function () {
            $(this).find(".details").show();
        },
        function () {
            $(this).find(".details").hide();
        }
    );

    // Toggle favorite selection.
    $(".favorite").click(function (event) {
        event.stopPropagation();

        $(this).toggleClass("selected");

        let productName = $(this).siblings("h3").text();

        // Check stock using data attribute.
        let stock = $(this).closest(".product").data("stock");

        if (stock === "no") {
            alert(productName + " is currently out of stock!");
        }
    });

    // Attribute selector: discounted products get a different style.
    $('.product[data-discount!="0"]').css({
        "border": "2px solid orange",
        "background-color": "#fff7ed"
    });

});
