import React, { useState } from 'react';
import '../css/studentform.css';

export default function StudentForm({ addStudent }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name
    if (name.trim() === '') {
      setNameError('Name is required.');
      return;
    }
    // Validate name length
    if (name.trim().length < 3) {
      setNameError('Name must be at least 3 characters long.');
      return;
    } else {
      setNameError('');
    }

    // Validate age
    const parsedAge = parseInt(age);
    if (!parsedAge || parsedAge <= 18) {
      setAgeError('Age must be a number greater than 18.');
      return;
    } else {
      setAgeError('');
    }

    // Add student if validation succeeds
    addStudent({ name, age });

    // Reset input fields
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container mt-3">
      <div>
        <label className="form-label">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        {nameError && <div className="error-message text-danger">{nameError}</div>}
      </div>
      <div>
        <label className="form-label">Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="form-input"
        />
        {ageError && <div className="error-message text-danger">{ageError}</div>}
      </div>
      <button type="submit" className="form-button">Add Student</button>
    </form>
  );
}
