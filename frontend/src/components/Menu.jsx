import { useState, useEffect } from 'react';
import "./Menu.css";


const Menu = () => {
    const [menus, setMenus] = useState([]);
    const BASE_URL = 'https://backend-capstone-6-moig.onrender.com';
  
    useEffect(() => {
      fetch(`${BASE_URL}/menus`)
        .then(response => response.json())
        .then(data => setMenus(data))
        .catch(error => console.error('Error fetching menus:', error));
    }, []);
  
    return (
      <div className="mainMenu">
        <h2>Menu</h2>
          {menus.map(menu => (
           <div key={menu._id} className="menu">
           <h3>{menu.name}</h3>
           <img src={menu.image} style={{height: "200px", width: "200px"}}  />
           <h4>{menu.description}</h4>
           <h4>${menu.price}</h4>
            </div>
          ))}
      </div>
    );
  };
  
  export default Menu;
  