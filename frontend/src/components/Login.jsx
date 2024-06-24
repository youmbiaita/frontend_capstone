// import React from 'react'
// import { FaRegCircleUser } from "react-icons/fa6";
// import { MdLockPerson } from "react-icons/md";
// import "./Login.css";

// const Login = () => {
//   return (
//     <div className='wrapper'>
//         <form action="">
//             <h1>Login</h1>
//             <div className='logbtn'>
//                 <input type="text" placeholder='Username' required/>
//                 <FaRegCircleUser className='icon'/>
//             </div>
//             <div className='logbtn'>
//                 <input type="password" placeholder='Password' required/>
//                 <MdLockPerson className='icon'/>

//             </div>
//             <div className='forgotbtn'>
//                 <label htmlFor="">
//                     <input type="checkbox" />
//                     Remenber me!
//                 </label>
//                 <a href="#">Forgot Password</a>
//             </div>
//             <button type='submit'>
//                 Login
//             </button>
//             <div className="register-link">
//                 <p>Don't have an account? <a href="register">Register</a></p>
//             </div>
//         </form>
//     </div>
//   )
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLockPerson } from "react-icons/md";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(
        "https://backend-capstone-6-moig.onrender.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      // Store the token in localStorage or a global state
      localStorage.setItem("token", data.token);

      navigate("/"); // Redirect to home page or another protected route
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FaRegCircleUser className="icon" />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <MdLockPerson className="icon" />
        <div className="forgotbtn">
          <label htmlFor="">
            <input type="checkbox" />
            Remenber me!
          </label>
          <a href="#">Forgot Password</a>
        </div>

        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account? <a href="register">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
