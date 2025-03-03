document.addEventListener("DOMContentLoaded", function() {
    const webcam = document.getElementById("webcam");
    const faceCanvas = document.getElementById("faceCanvas");
    const faceCtx = faceCanvas.getContext("2d");
    let faceData = null; // Store captured face image

    // Start the webcam
    async function startWebcam() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            webcam.srcObject = stream;
        } catch (err) {
            console.error("Webcam access denied:", err);
            alert("Please allow camera access to scan your face.");
        }
    }
    startWebcam();

    // Capture face from webcam
    document.getElementById("captureFace").addEventListener("click", function() {
        faceCanvas.width = webcam.videoWidth;
        faceCanvas.height = webcam.videoHeight;
        faceCtx.drawImage(webcam, 0, 0, faceCanvas.width, faceCanvas.height);

        // Convert canvas image to base64
        faceData = faceCanvas.toDataURL("image/png");

        // Indicate successful capture
        alert("Face captured successfully!");
    });

    // Form submission with face data
    document.getElementById("doctorForm").addEventListener("submit", async function(event) {
        event.preventDefault();

        // Get form data
        const doctorName = document.getElementById("doctor-name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const specialization = document.getElementById("specialization").value;
        const bloodGroup = document.getElementById("blood-group").value;
        const age = document.getElementById("age").value;
        const contact = document.getElementById("contact").value;
        const experience = document.getElementById("experience").value;
        const location = document.getElementById("location").value;

        // Validate required fields
        if (!doctorName || !email || !password || !specialization || !contact) {
            alert("Please fill out all required fields!");
            return;
        }

        // Ensure face scan is captured
        if (!faceData) {
            alert("Please scan your face before submitting.");
            return;
        }

        // Create JSON object for submission
        const formData = {
            doctorName, email, password, specialization, bloodGroup, age, contact, experience, location, faceData
        };

        try {
            // Send data to the backend API
            const response = await fetch("/api/registerDoctor", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" }
            });

            const result = await response.json();

            if (response.ok) {
                alert("Registration Successful!");
                window.location.href = "/dashboard.html"; // Redirect to doctor dashboard
            } else {
                alert("Error: " + result.message);
            }
        } catch (error) {
            console.error("Error submitting registration:", error);
            alert("Registration failed. Please try again.");
        }
    });
});
