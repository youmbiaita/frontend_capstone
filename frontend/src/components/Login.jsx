import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLockPerson } from "react-icons/md";
import "./Login.css";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
        const response = await handleLogin(email, password);
      if (response.user.isAdmin) {
        navigate('/menu');
      } else {
        navigate('/place-order');
      }
    } catch (error) {
      console.error("Login error:", error);
    }
    
       const response = await fetch(
         "https:backend-capstone-6-moig.onrender.com/auth/login",
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
       //Store the token in localStorage or a global state
      localStorage.setItem("token", data.token);

       navigate("/");  //Redirect to home page or another protected route
    
    }

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form className='login-form' onSubmit={handleLogin}>
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
        <div className="form-group">
          <label htmlFor="isAdmin">Admin</label>
          <input type="checkbox" id="isAdmin" />
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
