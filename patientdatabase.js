const patientDatabase = [
    {
        id: "1",
        name: "John Doe",
        age: 35,
        bloodGroup: "O+",
        contact: "+123456789",
        photo: "john.jpg"
    },
    {
        id: "2",
        name: "Alice Smith",
        age: 28,
        bloodGroup: "A-",
        contact: "+987654321",
        photo: "alice.jpg"
    },
    {
        id: "3",
        name: "Michael Brown",
        age: 40,
        bloodGroup: "B+",
        contact: "+456123789",
        photo: "michael.jpg"
    },
    {
        id: "4",
        name: "Emily Johnson",
        age: 25,
        bloodGroup: "AB-",
        contact: "+654987321",
        photo: "emily.jpg"
    }
];

// Export for use in script.js
if (typeof module !== "undefined") {
    module.exports = patientDatabase;
}
