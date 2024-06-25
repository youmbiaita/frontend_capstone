import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import AdminPage from "./components/AdminPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
// import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import NewOrder from "./components/NewOrder";
import Register from "./components/Registration";
import Login from "./components/Login";
import Orders from "./components/Order";
import Users from "./components/User";
import ContactForm from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";



function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const BASE_URL = "https://backend-capstone-6-moig.onrender.com";
  
  const handleLogin = async (email, password) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    setUser(data.user);
    return data;
  };

  const handleAddToCart = (menu) => {
    setCart([...cart, menu]);
    console.log("Cart:", cart);
  };

  const removeItem = (id) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((item) => item._id === id);
    if (index !== -1) {
      updatedCart.splice(index, 1); // Remove one instance of the item
      setCart(updatedCart);
    }
  };

  return (
    <>
      <div className="home">
        <NavBar orderCount={cart.length} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/cart" element={<Cart items={cart} callback={removeItem}/>} />
          <Route path="/newOrder" element={<NewOrder callback={handleAddToCart}/>} />
          <Route path="/register" element={<Register/>} />        
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/order" element={<Orders/>} />
          <Route path="/user" element={<Users/>} />
          <Route path="/about" element={<About/>} />

        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
