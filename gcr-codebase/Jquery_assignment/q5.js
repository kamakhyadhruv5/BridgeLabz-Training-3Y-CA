
$(document).ready(function () {

    $(".contactInfo").hide();

    // Clicking a manager highlights direct reports.
    $(".manager").click(function () {
        $(this).siblings(".employee").addClass("highlight");
    });

    // Use next() to display contact information.
    $(".contact").click(function () {
        $(this).next(".contactInfo").toggle();
    });

    // Use children() to select all direct members of a department.
    $(".departmentName").click(function () {
        $(this).parent().children(".item").css({
            "background-color": "#dbeafe"
        });
    });

    // Select a random employee and highlight their siblings.
    $("#random").click(function () {
        $(".employee").removeClass("highlight");

        let employees = $(".employee");
        let randomIndex = Math.floor(Math.random() * employees.length);

        let selected = employees.eq(randomIndex);

        selected.addClass("highlight");
        selected.siblings(".employee").addClass("highlight");
    });

    // Use parent() and find() to collapse or expand the team.
    $("#collapse").click(function () {
        let team = $("#team").parent();

        team.find(".department").toggle();
    });

});
