document.addEventListener("DOMContentLoaded", function () {
    const faceScanBtn = document.getElementById("faceScanBtn");
    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    let stream = null;

    // Start face scanning
    faceScanBtn.addEventListener("click", function () {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (mediaStream) {
                stream = mediaStream;
                video.srcObject = stream;
                video.style.display = "block";
                faceScanBtn.textContent = "Capturing...";

                setTimeout(() => {
                    context.drawImage(video, 0, 0, canvas.width, canvas.height);
                    let imageData = canvas.toDataURL("image/png");
                    console.log("Captured Face Image:", imageData);
                    alert("Face scanned successfully!");
                    video.style.display = "none";
                    stream.getTracks().forEach(track => track.stop());
                    faceScanBtn.textContent = "Face Scan & Enroll";
                }, 3000);
            })
            .catch(function (error) {
                console.error("Error accessing camera:", error);
                alert("Camera access denied or unavailable.");
            });
    });

    // Handle form submission
    document.getElementById("patientForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Registration Successful!");
    });
});
