import { useState, useEffect } from "react";

const MenuForm = ({ menu, onSave, onCancel }) => {
  const [name, setName] = useState(menu ? menu.name : "");
  const [description, setDescription] = useState(menu ? menu.description : "");
  const [price, setPrice] = useState(menu ? menu.price : "");
  const [image, setImage] = useState(menu ? menu.image : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMenu = { ...menu, name, description, price, image };
    onSave(updatedMenu);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default MenuForm;
