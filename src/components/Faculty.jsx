import React from 'react';
import './Faculty.css'; // Optional: Create a CSS file for styling

const Faculty = () => {
  const facultyMembers = [
    { name: 'Dr. John Doe', department: 'Computer Science' },
    { name: 'Prof. Jane Smith', department: 'Mathematics' },
    { name: 'Dr. Alice Johnson', department: 'Physics' },
    { name: 'Prof. Bob Brown', department: 'Chemistry' },
  ];

  return (
    <div className="faculty-container">
      <h2>Faculty Members</h2>
      <div className="faculty-grid">
        {facultyMembers.map((member, index) => (
          <div className="faculty-card" key={index}>
            <h3>{member.name}</h3>
            <p>{member.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
