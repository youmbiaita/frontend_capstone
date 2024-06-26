// import
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Registration.css";

const Register = () => {
  //state to store
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const BASE_URL = "https://backend-capstone-6-moig.onrender.com";

 // Fetch the list of users from the server when the component mounts
  useEffect(() => {
    fetch(`${BASE_URL}/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Check if the username or email already exists in the fetched users lis
    const existingUser = users.find(
      user => user.name.toLowerCase() === name.toLowerCase() || user.email.toLowerCase() === email.toLowerCase()
    );


    // If the username or email already exists, set an error message and return
    if (existingUser) {
      setMessage("Username or email already exists. Please try again.");
      return;
    }

    try {
        // Send a POST request to register the new user
      const response = await fetch(
        `${BASE_URL}/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),//request body
        }
      );

      const data = await response.json();
       // If the registration is successful, reset the form and set a success message
      if (response.ok) {
        setMessage("Registration successful!");
        setName('');
        setEmail('');
      } else {
        setMessage(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {message && <p>{message}</p>}
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
      
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

