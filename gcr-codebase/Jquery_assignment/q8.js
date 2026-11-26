
$(document).ready(function () {

    let count = 5;

    // Append a new post at the bottom.
    $("#addPost").click(function () {

        let title = $("#postTitle").val().trim();

        if (title === "") {
            alert("Please enter a post title.");
            return;
        }

        count++;

        let post = $("<article>").addClass("post");

        $("<h3>").text(title).appendTo(post);

        $("<p>").text("This is a new blog post.").appendTo(post);

        $("#posts").append(post);

        $("#postTitle").val("");
    });

    // Prepend a featured post at the top.
    $("#featured").click(function () {

        let featuredPost = `
            <article class="post">
                <h3>Featured Post</h3>
                <p>This is our featured blog article.</p>
            </article>
        `;

        $("#posts").prepend(featuredPost);
    });

    // Remove the last post.
    $("#removeLast").click(function () {

        $("#posts .post").last().remove();
    });

    // Add a tag before and after the first post.
    $("#addTag").click(function () {

        let firstPost = $("#posts .post").first();

        firstPost.before("<p class='tag'>Latest Blog Posts</p>");

        firstPost.after("<p class='tag'>End of featured post</p>");
    });

    // Highlight posts containing specific keywords.
    $("#highlight").click(function () {

        $(".post").each(function () {

            let content = $(this).text().toLowerCase();

            if (
                content.includes("javascript") ||
                content.includes("jquery") ||
                content.includes("python")
            ) {
                $(this).css({
                    "background-color": "#fef3c7",
                    "border": "2px solid orange"
                });
            }
        });
    });

});
