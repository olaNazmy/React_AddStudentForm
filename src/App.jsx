import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import React, { useState } from 'react';

import StudentForm from '../src/components/StudentForm';
import StudentTable from '../src/components/StudentTable';
import Footer from './components/Footer';

function App() 
{
  const [students, setStudents] = useState([]);
  
  const addStudent = (student) => {
    // Check if the name already exists
    if (students.some((s) => s.name === student.name)) {
      alert('Name already exists. Please enter a unique name.');
      return;
    }
    setStudents([...students, student]);
  };

  const deleteStudent = (index) => 
  {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Student Form</h1>
      <StudentForm addStudent={addStudent} />
      <StudentTable students={students} deleteStudent={deleteStudent} />  
      <Footer />
    </div>
  );
}

export default App;
