function handleRegister(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const userDetails = {
        firstName,
        lastName,
        email,
        password
    };

    // Save the user details to local storage
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    alert('Registration successful!');

    // Redirect to login page after registration
    window.location.href = '/login.html';
}
