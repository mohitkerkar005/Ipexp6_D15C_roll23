import React, { useState } from 'react';
import './ProfilePage.css'; // Import CSS file for styling
import userPhoto from './20240625_211540.jpg'; // Import the photo directly from src
const ProfilePage = () => {
  const [message, setMessage] = useState('');

  // Function to handle button click and update the message state
  const handleClick = () => {
    setMessage('Hello! This is your profile.');
  };

  // Sample user data
  const user = {
    name: 'Mohit Kerkar',
    photo: userPhoto, // Placeholder for user's photo
    email: 'mohit@mail.com',
    phone: '123-456-7890',
    department: 'Computer Science',
    semesterMarks: {
      semester1: 7.7,
      semester2: 8.43,
      semester3: 8.3,
      semester4: 8.96,
    },
  };

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <div className="profile-content">
        <div className="profile-info">
          <div className="profile-name-container">
            <h3>{user.name}</h3>
          </div>
          <div className="profile-details">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Department:</strong> {user.department}</p>
          </div>
          <div className="semester-marks-container">
            <h4>Semester cgpa:</h4>
            <p>Semester 1: {user.semesterMarks.semester1}cgpa</p>
            <p>Semester 2: {user.semesterMarks.semester2}cgpa</p>
            <p>Semester 3: {user.semesterMarks.semester3}cgpa</p>
            <p>Semester 4: {user.semesterMarks.semester4}cgpa</p>
          </div>
        </div>
        <div className="profile-photo-container">
          <img src={user.photo} alt={user.name} className="profile-photo" />
        </div>
      </div>
      {/* Optional button for interaction */}
      <button onClick={handleClick} className="message-button">Show Message</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ProfilePage;
