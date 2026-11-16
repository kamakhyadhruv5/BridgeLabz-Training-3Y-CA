const box = document.getElementById("box");
const coordinates = document.getElementById("coordinates");

// Track mouse movement inside the box.
box.addEventListener("mousemove", function(event) {

    coordinates.textContent =
        "clientX: " + event.clientX +
        " | clientY: " + event.clientY;

});

// Create a red dot on double-click.
box.addEventListener("dblclick", function(event) {

    const rect = box.getBoundingClientRect();

    const dot = document.createElement("div");

    dot.className = "dot";

    dot.style.left = (event.clientX - rect.left) + "px";
    dot.style.top = (event.clientY - rect.top) + "px";

    box.appendChild(dot);

});