import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('https://backend-capstone-6-moig.onrender.com/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email}),
        });
        const data = await response.json();
        if (response.ok) {
          setMessage('Registration successful!');
          setErrorMessage('');
      setName('');
      setEmail('');
      setTimeout(() => {
        nagivate("/login")
      }, 3000)
          //history.push('/login');
          // Optionally, redirect to login page or another page
        } else {
          setMessage(`Registration failed: ${data.message}`);
        }
      } catch (error) {
        console.error('Error during registration:', error);
        setMessage('An error occurred. Please try again.');
      }
    };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
