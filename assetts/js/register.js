// nav
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

// inputs
document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const placeInput = document.getElementById('place');
    const passwordInput = document.getElementById('pass');
    const submitButton = document.getElementById('submit-button');
    const errorMessage = document.getElementById('error-message');

    submitButton.addEventListener('click', () => {
        const nameValue = nameInput.value.trim();
        const phoneValue = phoneInput.value.trim();
        const placeValue = placeInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (nameValue && phoneValue && placeValue && passwordValue) {
            errorMessage.style.display = 'none';

            window.location.href = 'popup.html';
        } else {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'يرجى تعبئة جميع الحقول.';
        }
    });
});
