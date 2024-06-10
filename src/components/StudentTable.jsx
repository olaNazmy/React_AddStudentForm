import React from 'react'
import '../css/studenttable.css';

export default function StudentTable({ students, deleteStudent }) {
    return (
        <div className="table-container mt-4">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <button 
                  onClick={() => deleteStudent(index)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
          </table>
        </div>
      )
}
