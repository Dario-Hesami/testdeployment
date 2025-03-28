// Client-Side Form Validation
const formElm = document.getElementById('contact-form');
formElm.addEventListener('submit', function(event) {
    let valid = true;

    // Name validation
    let nameInput = document.getElementById('name');
    let nameError = document.getElementById('name-error');
    if (nameInput.value.trim() === '') {
        nameError.textContent = "*Name is required.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    let emailInput = document.getElementById('email');
    let emailError = document.getElementById('email-error');
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        emailError.textContent = "*Enter a valid email.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    if (!valid) {
        event.preventDefault();
    }
});
