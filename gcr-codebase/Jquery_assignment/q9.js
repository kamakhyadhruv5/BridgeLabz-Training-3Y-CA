
/* VERSION 1: Carousel and widget highlighting */

jq1(document).ready(function () {

    let current = 0;

    let widgets = jq1(".widget");

    // Display only the first widget initially.
    widgets.hide().eq(0).show();

    // Rotate widgets using Version 1.
    setInterval(function () {

        widgets.eq(current).fadeOut(300);

        current = (current + 1) % widgets.length;

        widgets.eq(current).fadeIn(300);

    }, 3000);

    // Highlight active widget.
    jq1("#carousel").on("click", ".widget", function () {

        widgets.removeClass("highlight");

        jq1(this).addClass("highlight");

    });

    // Next widget button.
    jq1("#next").click(function () {

        widgets.eq(current).hide();

        current = (current + 1) % widgets.length;

        widgets.eq(current).show();

    });

});


/* VERSION 2: Modal and tooltips */

jq2(document).ready(function () {

    // Open notification modal.
    jq2("#openModal").click(function () {
        jq2("#modal").fadeIn();
    });

    // Close notification modal.
    jq2("#closeModal").click(function () {
        jq2("#modal").fadeOut();
    });

    // Attach tooltip behavior on hover.
    jq2(".tooltip").hover(

        function () {
            let message = jq2(this).attr("title");

            jq2(this).attr("data-original-title", message);

            jq2(this).removeAttr("title");

            jq2(this).append(
                "<span class='tooltipText'> - " + message + "</span>"
            );
        },

        function () {
            jq2(this).find(".tooltipText").remove();
            jq2(this).attr(
                "title",
                jq2(this).attr("data-original-title")
            );
        }

    );

});
