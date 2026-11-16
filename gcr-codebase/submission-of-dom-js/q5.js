const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const previewImage = document.getElementById("previewImage");
const closeButton = document.getElementById("closeButton");

// Open modal when an image is clicked.
gallery.addEventListener("click", function(event) {

    if (event.target.tagName === "IMG") {
        previewImage.src = event.target.src;
        modal.style.display = "flex";
    }

});

// Close modal when clicking outside the image.
modal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Prevent closing when clicking inside the modal.
modalContent.addEventListener("click", function(event) {
    event.stopPropagation();
});

closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});