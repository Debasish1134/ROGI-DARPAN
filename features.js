document.addEventListener("DOMContentLoaded", function () {
    // Highlight active page in navbar
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.style.color = "#FFD700"; /* Gold */
        }
    });

    // Background Animation Effect
    const bg = document.querySelector(".floating-bg");
    let direction = 1;
    setInterval(() => {
        bg.style.transform = `translateY(${direction * 10}px)`;
        direction *= -1;
    }, 5000);
});
