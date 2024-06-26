import { useState, useEffect } from "react";
import "./Order.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  const BASE_URL = "https://backend-capstone-6-moig.onrender.com";


  // useEffect hook to fetch orders from the API when the component mounts
   useEffect(() => {
    fetch(`${BASE_URL}/orders`)
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then((data) => setOrders(data))
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div className="orders">
    <h2 className="orders-title">Orders</h2>
    {orders.length > 0 ? (
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order._id} className="order-item">
            <h3>Order ID: {order._id}</h3>
             {/* <p>User ID: {order.userId}</p> */}
            <div className="order-items">
              {order.orderItems.map((item, index) => (
                <div key={index} className="order-item-detail">
                  <h4>Item ID: {item.menuId}</h4>
                </div>
              ))}
            </div>
            <p>Status: {order.status}</p>
          </div>
        ))}
      </div>
    ) : (
      <p>No orders found.</p>
    )}
    </div>
  );
};

export default Orders;
