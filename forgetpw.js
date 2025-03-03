// Function to simulate sending an OTP to the phone number
function sendOtp() {
    const phoneNumber = document.getElementById('phoneNumber').value;

    if (phoneNumber && phoneNumber.match(/^[0-9]{10}$/)) {
        // Simulate OTP sending (You would call your backend API here)
        alert("OTP sent to your phone number.");

        // Hide phone number form and show OTP verification form
        document.getElementById('phoneForm').style.display = 'none';
        document.getElementById('otpGroup').style.display = 'block';
    } else {
        alert("Please enter a valid phone number.");
    }
}

// Function to simulate OTP verification
function verifyOtp() {
    const otp = document.getElementById('otp').value;

    if (otp && otp.length === 6) {
        // Simulate OTP verification (You would call your backend API here)
        alert("OTP verified successfully!");

        // Redirect to login page after successful OTP verification
        window.location.href = 'login.html';
    } else {
        alert("Please enter a valid 6-digit OTP.");
    }
}
