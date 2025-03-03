// Function to handle file upload
function handleFileUpload(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            console.log('File content:', e.target.result);
            alert('File uploaded successfully!');
        };
        reader.readAsDataURL(file);
    }
}

// Attach event listeners to file inputs
document.getElementById('recent-report').addEventListener('change', handleFileUpload);
document.getElementById('next-report').addEventListener('change', handleFileUpload);
