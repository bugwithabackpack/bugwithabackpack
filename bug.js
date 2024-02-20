// Add event listener for DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var redirectButton = document.getElementById("redirectButton");
    var aboutMeButton = document.getElementById("aboutme");

    // Add event listener for button click (redirectButton)
    redirectButton.addEventListener("click", function() {
        // Redirect to MyClicks.html
        window.location.href = "MyClicks.html";
    });

    // Add event listener for button click (aboutMeButton)
    aboutMeButton.addEventListener("click", function() {
        // Redirect to aboutme.html
        window.location.href = "aboutme.html";
    });
});
