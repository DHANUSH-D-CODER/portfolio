// Wait for the entire page to load before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the elements for the certificate modal
    const modal = document.getElementById("certificateModal");
    const modalImg = document.getElementById("modalImage");
    const certItems = document.querySelectorAll(".certification-list li");
    const closeModal = document.querySelector(".close-modal");

    // Loop through each certificate list item and add a click event
    certItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get the image path from the 'data-image' attribute
            const imgSrc = this.getAttribute('data-image');
            
            // Show the modal and set the image source
            modal.style.display = "flex";
            modalImg.src = imgSrc;
        });
    });

    // Function to close the modal
    function hideModal() {
        modal.style.display = "none";
    }

    // Add click event to the close button (the '×')
    closeModal.addEventListener('click', hideModal);

    // Add click event to the modal background to close it
    modal.addEventListener('click', function(event) {
        // If the clicked element is the modal background itself, close it
        if (event.target === modal) {
            hideModal();
        }
    });

    // Add keyboard event to close the modal with the 'Escape' key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.style.display === "flex") {
            hideModal();
        }
    });

});