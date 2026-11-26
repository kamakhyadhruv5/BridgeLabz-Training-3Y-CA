
$(document).ready(function () {

    // Search courses whenever the user types.
    $("#search").keyup(function () {

        let searchText = $(this).val().toLowerCase();
        let matched = 0;

        $(".course").each(function () {

            let courseName = $(this).text();

            // Check whether the course name contains the search text.
            if (courseName.toLowerCase().includes(searchText)) {

                $(this).show();
                matched++;

                // Highlight the matched course.
                $(this).css({
                    "background-color": "#d1fae5",
                    "border": "2px solid green"
                });

            } else {

                // Hide courses that do not match.
                $(this).hide();

            }
        });

        // Display the number of matching courses.
        $("#count").text("Courses found: " + matched);
    });

    // Clear search and display all courses again.
    $("#clear").click(function () {

        $("#search").val("");

        $(".course").show().css({
            "background-color": "#f8fafc",
            "border": "1px solid #ddd"
        });

        $("#count").text("Courses found: " + $(".course").length);
    });

    // Initial course count.
    $("#count").text("Courses found: " + $(".course").length);

});
