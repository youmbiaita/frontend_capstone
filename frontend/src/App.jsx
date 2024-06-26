//All imports
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import NewOrder from "./components/NewOrder";
import Register from "./components/Registration";
import Orders from "./components/Order";
import Users from "./components/User";
import ContactForm from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  //state to store data
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const BASE_URL = "https://backend-capstone-6-moig.onrender.com";
  
 // Function to handle adding items to the cart
  const handleAddToCart = (menu) => {
    setCart([...cart, menu]);
   
  };

  // Function to handle removing items from the cart
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
