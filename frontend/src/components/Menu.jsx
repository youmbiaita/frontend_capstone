import { useState, useEffect } from "react";
import "./Menu.css";

const Menu = () => {
  const [menus, setMenus] = useState([]);

  const BASE_URL = "https://backend-capstone-6-moig.onrender.com";

  useEffect(() => {
    fetch(`${BASE_URL}/menus`)
      .then((response) => response.json())
      .then((menu) => setMenus(menu))
      .catch((error) => console.error("Error fetching menus:", error));
  }, []);


  return (
    <div className="mainMenu">
      <h2 className="menu-title">Menu</h2>
      <div className="menu-grid">
        {menus.map((menu) => (
          <div key={menu._id} className="menu-item">
            <h3 className="title">{menu.name}</h3>
            <img src={menu.image} style={{ height: "200px", width: "200px" }} />
            <div className="menu-item-content">
              <h4  className="title">{menu.description}</h4>
              <h4>Price: ${menu.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
