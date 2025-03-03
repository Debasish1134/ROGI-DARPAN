document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent actual form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields before submitting.");
            return;
        }

        // Simulate form submission (Replace with real backend integration)
        setTimeout(() => {
            alert(`Thank you, ${name}! Your message has been submitted successfully.`);
            form.reset();
        }, 500);
    });
});
