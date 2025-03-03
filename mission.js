document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-btn");
    const extraText = document.querySelector(".extra-text");

    toggleBtn.addEventListener("click", function () {
        if (extraText.classList.contains("visible")) {
            extraText.classList.remove("visible");
            extraText.classList.add("hidden");
            toggleBtn.textContent = "Show More";
        } else {
            extraText.classList.remove("hidden");
            extraText.classList.add("visible");
            toggleBtn.textContent = "Show Less";
        }
    });
});
