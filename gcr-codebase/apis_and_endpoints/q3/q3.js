
$(document).ready(function () {

    // Load tasks according to selected filter.
    function loadTasks() {

        let filter = $("#filter").val();

        let params = {};

        // Prepare query parameters based on selection.
        if (filter === "completed") {
            params.completed = true;
        }
        else if (filter !== "all") {
            params.priority = filter;
        }

        $("#taskList").html("Loading tasks...");

        // GET request using jQuery AJAX.
        $.ajax({
            url: "http://localhost:3003/tasks",
            method: "GET",
            data: params,

            success: function (tasks) {

                $("#taskList").empty();

                if (tasks.length === 0) {
                    $("#taskList").text("No tasks found.");
                    return;
                }

                tasks.forEach(function (task) {

                    let row = $("<article>").addClass("task");

                    let title = $("<span>")
                        .text(task.title)
                        .toggleClass("completed", task.completed);

                    let checkbox = $("<input>")
                        .attr("type", "checkbox")
                        .prop("checked", task.completed)
                        .attr("data-id", task.id);

                    row.append(
                        title,
                        $("<span>").text(task.priority.toUpperCase()),
                        checkbox
                    );

                    $("#taskList").append(row);
                });

            },

            error: function () {
                $("#taskList").text("Unable to load tasks.");
            }
        });
    }

    // Reload tasks whenever dropdown changes.
    $("#filter").change(function () {
        loadTasks();
    });

    // PATCH request when task completion checkbox changes.
    $("#taskList").on("change", "input[type=checkbox]", function () {

        let id = $(this).data("id");
        let completed = $(this).prop("checked");

        let checkbox = $(this);

        $.ajax({
            url: "http://localhost:3003/tasks/" + id,
            method: "PATCH",
            contentType: "application/json",

            data: JSON.stringify({
                completed: completed
            }),

            success: function () {

                // Reload to keep the currently selected filter accurate.
                loadTasks();
            },

            error: function () {

                // Restore previous checkbox state if update fails.
                checkbox.prop("checked", !completed);

                $("#message").text("Unable to update task.");
            }
        });
    });

    // Initial load.
    loadTasks();

});
