from flask import Flask, request, jsonify
import base64
import os

app = Flask(__name__)

# Ensure 'faces' folder exists
if not os.path.exists("faces"):
    os.makedirs("faces")

@app.route('/api/registerDoctor', methods=['POST'])
def register_doctor():
    data = request.json
    doctor_name = data.get("doctorName")
    email = data.get("email")
    password = data.get("password")
    specialization = data.get("specialization")
    blood_group = data.get("bloodGroup")
    age = data.get("age")
    contact = data.get("contact")
    experience = data.get("experience")
    location = data.get("location")
    face_data = data.get("faceData")  # Base64 image

    if not doctor_name or not email or not password or not specialization or not face_data:
        return jsonify({"message": "Missing required fields"}), 400

    # Save face image to local storage (or database)
    face_path = f"faces/{email}.png"
    with open(face_path, "wb") as f:
        f.write(base64.b64decode(face_data.split(",")[1]))

    # Save details in database (Example: Just printing for now)
    print(f"Doctor {doctor_name} registered with face image saved at {face_path}")

    return jsonify({"message": "Doctor registered successfully!"}), 200

if __name__ == '__main__':
    app.run(debug=True)
