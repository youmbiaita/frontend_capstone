import { useState, useEffect } from "react";
import MenuForm from "./MenuForm";
import "./Menu.css";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [editingMenu, setEditingMenu] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const BASE_URL = "https://backend-capstone-6-moig.onrender.com";

  // useEffect hook to fetch menu items from the API when the component mounts
  useEffect(() => {
    fetch(`${BASE_URL}/menus`)
      .then((response) => response.json())
      .then((menu) => setMenus(menu))
      .catch((error) => console.error("Error fetching menus:", error));
  }, []);
  
// Function to handle the addition of a new menu item
  const handleAdd = () => {
    setEditingMenu(null);
    setShowForm(true);
  };

   // Function to handle the editing of an existing menu item
  const handleEdit = (menu) => {
    setEditingMenu(menu);
    setShowForm(true);
  };

   // Function to handle the remove of an existing menu item
  const handleRemove = (menuId) => {
    fetch(`${BASE_URL}/menus/${menuId}`, { method: "DELETE" })
      .then(() => setMenus(menus.filter((menu) => menu._id !== menuId)))
      .catch((error) => console.error("Error removing menu:", error));
  };

  const handleSave = (menu) => {
    const method = menu._id ? "PATCH" : "POST";
    const url = menu._id ? `${BASE_URL}/menus/${menu._id}` : `${BASE_URL}/menus`;
    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(menu),
    })
      .then((response) => response.json())
      .then((savedMenu) => {
        if (menu._id) {
          setMenus(menus.map((m) => (m._id === savedMenu._id ? savedMenu : m)));
        } else {
          setMenus([...menus, savedMenu]);
        }
        setShowForm(false);
      })
      .catch((error) => console.error("Error saving menu:", error));
  };

  const handleCancel = () => {
    setShowForm(false);
  };


  return (
    <div className="mainMenu">
      <h2 className="menu-title">Menu</h2>
      <button onClick={handleAdd}>Add New Menu Item</button>
      {showForm && (
        <MenuForm
          menu={editingMenu}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
      <div className="menu-grid">
        {menus.map((menu) => (
          <div key={menu._id} className="menu-item">
            <h3 className="title">{menu.name}</h3>
            <img src={menu.image} style={{ height: "200px", width: "200px" }} />
            <div className="menu-item-content">
              <h4  className="title">{menu.description}</h4>
              <h4>Price: ${menu.price}</h4>
              <button onClick={() => handleEdit(menu)}>Edit</button>
              <button onClick={() => handleRemove(menu._id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
