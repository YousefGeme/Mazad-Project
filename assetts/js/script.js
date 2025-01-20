const nav = document.getElementById("nav");
const open = document.getElementById("openIcon");
const close = document.getElementById("closeIcon");

function toggleNav() {
    if (!nav.style.height || nav.style.height === "0px") {
        nav.style.height = "500px";
        open.style.display = "none";
        close.style.display = "inline";
    } else {
        nav.style.height = "0px";
        open.style.display = "inline";
        close.style.display = "none";
    }
}

// Close the navigation when the user scrolls
window.addEventListener("scroll", () => {
    if (nav.style.height && nav.style.height !== "0px") {
        nav.style.height = "0px";
        open.style.display = "inline";
        close.style.display = "none";
    }
});

// Reset the nav state on window resize
window.addEventListener("resize", () => {
    nav.style.height = "0px";
    open.style.display = "inline";
    close.style.display = "none";
});


//inputs
document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('pass');
    const submitButton = document.getElementById('submit-button');
    const errorMessage = document.getElementById('error-message');

    submitButton.addEventListener('click', () => {
        const phoneValue = phoneInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (phoneValue && passwordValue) {
            // Hide error message
            errorMessage.style.display = 'none';

            // Redirect to the next page (popup.html)
            window.location.href = 'popup.html';
        } else {
            // Show error message
            errorMessage.style.display = 'block';
        }
    });
});

