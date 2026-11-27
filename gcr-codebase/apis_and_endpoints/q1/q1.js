
$(document).ready(function () {

    let searchTimer;

    // Listen for typing inside the search box.
    $("#search").on("input", function () {

        clearTimeout(searchTimer);

        let value = $(this).val().trim();

        if (value === "") {
            $("#results").empty();
            return;
        }

        // Small delay to avoid sending a request for every keystroke.
        searchTimer = setTimeout(function () {

            $("#loading").show();
            $("#results").empty();

            // GET request using jQuery AJAX with query parameter.
            $.ajax({
                url: "http://localhost:3001/products",
                method: "GET",
                data: {
                    q: value
                },

                success: function (products) {

                    $("#results").empty();

                    if (products.length === 0) {
                        $("#results").text("No products found");
                        return;
                    }

                    // Display product image, name and price.
                    products.forEach(function (product) {

                        let card = $("<article>").addClass("product");

                        let image = $("<img>")
                            .attr("src", product.image)
                            .attr("alt", product.name);

                        let details = $("<div>");

                        $("<h3>")
                            .text(product.name)
                            .appendTo(details);

                        $("<p>")
                            .text("Price: ₹" + product.price)
                            .appendTo(details);

                        card.append(image, details);

                        $("#results").append(card);
                    });
                },

                error: function () {
                    $("#results").text("Unable to load products.");
                },

                complete: function () {
                    $("#loading").hide();
                }
            });

        }, 300);

    });

});
