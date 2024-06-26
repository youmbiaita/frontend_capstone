import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

const NewOrder = ({callback}) => {
  const [menus, setMenus] = useState([]);
  const BASE_URL = "https://backend-capstone-6-moig.onrender.com";

  // useEffect hook to fetch menu items from the API when the component mounts
  useEffect(() => {
    fetch(`${BASE_URL}/menus`)
      .then((response) => response.json())
      .then((menu) => setMenus(menu))
      .catch((error) => console.error("Error fetching menus:", error));
  }, []);

  return (
    <div className="mainMenu">
      <h2 className="menu-title">Place Your Order</h2>
      <div className="menu-grid">
        {menus.map((menu) => (
          <div key={menu._id} className="menu-item">
            <h3 className="title">{menu.name}</h3>
            <img src={menu.image} style={{ height: "200px", width: "200px" }} />
            <div className="menu-item-content">
              <h4 className="title">{menu.description}</h4>
              <h4>Price: ${menu.price}</h4>
              <button className="add-to-cart" onClick={() => callback(menu)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link className="nav-link" to="/cart">Go To Cart</Link>
    </div>
  );
};

export default NewOrder;
