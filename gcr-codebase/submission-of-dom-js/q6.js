const searchInput = document.getElementById("searchInput");
const rows = document.querySelectorAll("#studentTable tr");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value.toLowerCase();
    let found = 0;

    rows.forEach(function(row) {

        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchValue)) {
            row.style.display = "";
            found++;
        } else {
            row.style.display = "none";
        }

    });

    if (found === 0) {
        noResults.hidden = false;
    } else {
        noResults.hidden = true;
    }

});