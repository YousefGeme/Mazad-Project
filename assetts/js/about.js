const nav = document.getElementById("nav");
const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");

// Toggle navigation visibility
function toggleNav() {
    if (nav.classList.contains("active")) {
        nav.classList.remove("active"); // Close nav
        openIcon.style.display = "inline"; // Show open icon
        closeIcon.style.display = "none"; // Hide close icon
    } else {
        nav.classList.add("active"); // Open nav
        openIcon.style.display = "none"; // Hide open icon
        closeIcon.style.display = "inline"; // Show close icon
    }
}

// Close navigation on scroll
window.addEventListener("scroll", () => {
    if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        openIcon.style.display = "inline";
        closeIcon.style.display = "none";
    }
});

// Reset navigation state on window resize
window.addEventListener("resize", () => {
    nav.classList.remove("active");
    openIcon.style.display = "inline";
    closeIcon.style.display = "none";
});

// Add an event listener for the DOMContentLoaded event (fires after HTML is loaded)
document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loading-screen");

    // Add a slight delay before hiding the loading screen for smoothness
    setTimeout(() => {
        loadingScreen.classList.add("hidden"); // Add the "hidden" class to fade out
    }, 500); // Adjust delay as needed (e.g., 500ms)
});

// Show loading screen before navigating away
window.addEventListener("beforeunload", function () {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.remove("hidden"); // Show loading screen
});


AOS.init();
