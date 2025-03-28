// Function to load the header and footer dynamically
function loadComponents() {
    fetch("/myproject/components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    fetch("/myproject/components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
            updateFooterYear(); // Call function after footer loads
        });
}

// Function to update the footer year dynamically
function updateFooterYear() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", loadComponents);

// Wait until the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // DOM Manipulation (Changing Text)
    const buttonElement = document.getElementById('change-text-btn');
    const textElement = document.getElementById('demo-text');
    buttonElement.addEventListener('click', function() {
        textElement.textContent = "Text has been changed!";
        textElement.style.color = 'green';
        textElement.style.fontSize = '1.5rem';
    });
});
