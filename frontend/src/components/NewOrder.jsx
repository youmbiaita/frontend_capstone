import { useState, useEffect } from "react";
import "./Menu.css";

const NewOrder = () => {
  const [menus, setMenus] = useState([]);
  const [cart, setCart] = useState([]);

  const BASE_URL = "https://backend-capstone-6-moig.onrender.com";

  useEffect(() => {
    fetch(`${BASE_URL}/menus`)
      .then((response) => response.json())
      .then((menu) => setMenus(menu))
      .catch((error) => console.error("Error fetching menus:", error));
  }, []);

  const handleAddToCart = (menu, quantity) => {
    const item = { ...menu, quantity: parseInt(quantity, 10), totalPrice: menu.price * parseInt(quantity, 10) };
    setCart([...cart, item]);
    console.log("Cart:", cart);
   
  };

  return (
    <div className="mainMenu">
      <h2 className="menu-title">Place your Order</h2>
      <div className="menu-grid">
        {menus.map((menu) => (
          <div key={menu._id} className="menu-item">
            <h3 className="title">{menu.name}</h3>
            <img src={menu.image} style={{ height: "200px", width: "200px" }} />
            <div className="menu-item-content">
              <h4  className="title">{menu.description}</h4>
              <h4>Price: ${menu.price}</h4>
              <label>
                Quantity:
                <input type="number" defaultValue="1" min="1" id={`quantity-${menu._id}`} />
              </label>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(menu, document.getElementById(`quantity-${menu._id}`).value)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewOrder;
