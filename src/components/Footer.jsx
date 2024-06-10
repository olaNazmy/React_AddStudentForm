import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white  mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 Your Website</p>
          </div>
          <div className="col-md-6 text-md-right">
            <p>Designed with <span className="text-danger">&hearts;</span> by <a href="#" className="text-white">Ola</a></p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-secondary">
        <div className="container text-center py-2">
          <p className="mb-0">Connect with us:</p>
          <div>
            <a href="#" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
