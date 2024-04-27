// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the element with class 'dynamic-text'
    const dynamicText = document.querySelector('.dynamic-text');
    // Array containing different roles
    const roles = ["Cloud Engineer.", "Project Manager", "UI/UX Designer.", "Software Developer.", "Front-end Developer."];
    // Initialize index to 0
    let index = 0;

    // Function to type each role
    function typeRole() {
        // Get the text of the current role
        let text = roles[index];
        // Get the current text content of the dynamic element
        let currentText = dynamicText.textContent;
        // Get the length of the current text
        let len = currentText.length;

        // If there's text to erase
        if (len > 0) {
            // Erase one character at a time
            setTimeout(function() {
                dynamicText.textContent = currentText.slice(0, len - 1);
                // Call typeRole recursively after erasing one character
                typeRole();
            }, 100); // Increased timeout to slow down erasing animation
        } else {
            // Move to the next role in the array
            index = (index + 1) % roles.length;
            let newText = roles[index];
            // Start typing the new role
            animateText(newText, 0);
        }
    }

    // Function to animate typing of the new role
    function animateText(newText, i) {
        // If there are characters left to type
        if (i < newText.length) {
            // Add one character at a time
            setTimeout(function() {
                dynamicText.textContent += newText.charAt(i);
                // Call animateText recursively to type the next character
                animateText(newText, i + 1);
            }, 100); // Increased timeout to slow down typing animation
        } else {
            // Once typing is complete, wait for 1 second and then start typing the next role
            setTimeout(function() {
                typeRole();
            }, 1000);
        }
    }

    // Start typing the first role
    typeRole();
});
