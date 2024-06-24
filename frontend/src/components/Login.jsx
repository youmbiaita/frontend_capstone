// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// // import './Login.css'; // Import CSS file for styling

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const history = useHistory();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://backend-capstone-6-moig.onrender.com/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         // Handle successful login, such as setting user session/token
//         console.log('Login successful');
//         history.push('/menu'); // Redirect to menu page on success
//       } else {
//         setError(`Login failed: ${data.message}`);
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {error && <p className="error-message">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//       <p className="mt-3">
//         Don't have an account? <Link to="/register">Register here</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;
