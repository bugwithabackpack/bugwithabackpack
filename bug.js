// Add event listener for DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var button = document.getElementById("redirectButton");

    // Add event listener for button click
    button.addEventListener("click", function() {
        // Redirect to another page
        window.location.href = "MyClicks.html";
    });
});
