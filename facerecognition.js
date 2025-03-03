document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("videoInput");
    const canvas = document.getElementById("canvasOutput");
    const context = canvas.getContext("2d");
    const captureBtn = document.getElementById("captureBtn");

    // Import patient database
let patientDatabase;
fetch("patientdatabase.js")
    .then(response => response.text())
    .then(data => {
        patientDatabase = eval(data);
    });
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("videoInput");
    const canvas = document.getElementById("canvasOutput");
    const context = canvas.getContext("2d");
    const captureBtn = document.getElementById("captureBtn");

    // Initialize camera
    async function startCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            video.play();
        } catch (err) {
            console.error("Camera Error: ", err);
        }
    }

    // Simulated face recognition function (Replace with ML model)
    function recognizeFace(imageData) {
        // Dummy logic: Pick a random patient for now
        const randomIndex = Math.floor(Math.random() * patientDatabase.length);
        return patientDatabase[randomIndex];
    }

    // Capture face and recognize patient
    captureBtn.addEventListener("click", function () {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL("image/png");

        // Simulated face recognition
        const patient = recognizeFace(imageData);

        if (patient) {
            document.getElementById("patientName").innerText = patient.name;
            document.getElementById("patientAge").innerText = patient.age;
            document.getElementById("patientBlood").innerText = patient.bloodGroup;
            document.getElementById("patientContact").innerText = patient.contact;
            document.getElementById("patientImage").src = patient.photo;

            document.getElementById("patientDetails").style.display = "block";
        } else {
            alert("Face not recognized. Try again.");
        }
    });

    startCamera();
});

  // Initialize camera
    async function startCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            video.play();
        } catch (err) {
            console.error("Camera Error: ", err);
        }
    }
    // Simulated face recognition function
    function recognizeFace(imageData) {
        // Dummy logic to return a patient (replace with ML model)
        const randomKey = Math.random() > 0.5 ? "face_1" : "face_2";
        return patientDatabase[randomKey];
    }
    // Capture face and recognize patient
    captureBtn.addEventListener("click", function () {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL("image/png");
        // Simulated face recognition
        const patient = recognizeFace(imageData);
       if (patient) {
            document.getElementById("patientName").innerText = patient.name;
            document.getElementById("patientAge").innerText = patient.age;
            document.getElementById("patientBlood").innerText = patient.blood;
            document.getElementById("patientContact").innerText = patient.contact;
            document.getElementById("patientImage").src = patient.image;

            document.getElementById("patientDetails").style.display = "block";
        } else {
            alert("Face not recognized. Try again.");
        }
    });
    startCamera();
});
