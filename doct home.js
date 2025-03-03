function saveDetails() {
    const name = document.getElementById('doctor-name').value;
    const bloodGroup = document.getElementById('blood-group').value;
    const age = document.getElementById('age').value;
    const contact = document.getElementById('contact').value;
    const experience = document.getElementById('experience').value;

    const doctorDetails = {
        name,
        bloodGroup,
        age,
        contact,
        experience
    };

    // Save the doctor details to local storage
    localStorage.setItem('doctorDetails', JSON.stringify(doctorDetails));

    alert('Doctor details saved!');
}
