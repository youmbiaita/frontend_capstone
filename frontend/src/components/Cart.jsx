import { useState, useEffect } from "react";

import "./Cart.css";

const Cart = ({ items, callback }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  console.log(items);
  let quantityMap = new Map();
  for (const item of items) {
    if (quantityMap.has(item)) {
      let qt = quantityMap.get(item) + 1;
      quantityMap.set(item, qt);
    } else {
      quantityMap.set(item, 1);
    }
  }
  console.log(quantityMap);

  const handleUsernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="mainMenu">
      <h2 className="menu-title">Place Your Order</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="ptext"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="menu-grid">
          {[...quantityMap].map(([item, quantity]) => (
            <div key={item._id} className="menu-item">
              <h3 className="title">{item.name}</h3>
              <img
                src={item.image}
                style={{ height: "200px", width: "200px" }}
              />
              <div className="menu-item-content">
                <h4 className="title">{item.description}</h4>
                <h4>Price: ${item.price}</h4>
                <h4>Quantity: {quantity}</h4>
                <hr />
                <h4>Sub Total: ${parseInt(item.price) * quantity}</h4>
                <button
                  className=""
                  onClick={() => callback(item._id)}
                >
                  Edith
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => callback(item._id)}
                >
                  Remove
                </button>

              </div>
            </div>
          ))}
        </div>
        <input id="newOrderBtn" type="submit" value="Place New Order" />
      </form>
    </div>
  );
};

export default Cart;
