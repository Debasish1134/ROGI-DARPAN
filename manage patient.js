// Sample patient data
const patients = [
    { id: 1, name: "John Doe", age: 45, gender: "Male", bloodGroup: "O+", contact: "(987) 654-3210" },
    { id: 2, name: "Jane Smith", age: 38, gender: "Female", bloodGroup: "A-", contact: "(123) 456-7890" },
    { id: 3, name: "Raj Kumar", age: 55, gender: "Male", bloodGroup: "B+", contact: "(345) 678-9012" },
    { id: 4, name: "Asha Verma", age: 29, gender: "Female", bloodGroup: "AB+", contact: "(567) 890-1234" }
];

// Function to display patients in the table
function displayPatients() {
    const tableBody = document.querySelector("#patient-table tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    patients.forEach(patient => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.gender}</td>
            <td>${patient.bloodGroup}</td>
            <td>${patient.contact}</td>
            <td>
                <button class="edit" onclick="editPatient(${patient.id})">Edit</button>
                <button class="delete" onclick="deletePatient(${patient.id})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Function to edit a patient (placeholder, you can implement the form)
function editPatient(id) {
    const patient = patients.find(p => p.id === id);
    alert(`Edit Patient: ${patient.name}`);
    // You can implement the edit functionality here (e.g., open a modal with patient details)
}

// Function to delete a patient
function deletePatient(id) {
    const index = patients.findIndex(p => p.id === id);
    if (index !== -1) {
        patients.splice(index, 1); // Remove the patient from the array
        displayPatients(); // Re-render the patient list
    }
}

// Initial display
displayPatients();
