// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import "./Cart.css";

// const Cart = ({ items, callback }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [users, setUsers] = useState([]);
//   const [userId, setUserId] = useState("");
//   const [message, setMessage] = useState("");
//   // const [orderItems, setOrderItems] = useState(items);
//   // const [status, setStatus] = useState("Pending");
//   const navigate = useNavigate()
//   const BASE_URL = "https://backend-capstone-6-moig.onrender.com";

//   useEffect(() => {
//     fetch(`${BASE_URL}/users`)
//       .then((response) => response.json())
//       .then((users) => setUsers(users))
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);


//   let quantityMap = new Map();
//   for (const item of items) {
//     if (quantityMap.has(item)) {
//       let qt = quantityMap.get(item) + 1;
//       quantityMap.set(item, qt);
//     } else {
//       quantityMap.set(item, 1);
//     }
//   }


//   const handleNameChange = (e) => {
//     e.preventDefault();
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     e.preventDefault();
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const currentUser = users.find(user => user.name.toLowerCase() === name.toLowerCase() && user.email.toLowerCase() === email.toLowerCase());
//     if (!currentUser) {
//       setMessage("User not found");
//       return;
//     }

//     const orderItems = items.map(item => ({ menuId: item._id, quantity: quantityMap.get(item) }));
//     const orderData = {
//       userId: currentUser._id,
//       orderItems,
//       status: "Pending"
//     };

//     try {
//       const response = await fetch(
//         `${BASE_URL}/orders`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({orderData}),
//         }
//       );

//       const data = await response.json();
//       if (response.ok) {
//         setMessage("Order successful!");
//         setName('');
//         setEmail('');

//         setTimeout(() => {
//           navigate('/order');
//         }, 2000);

//       } else {
//         setMessage(`Order failed: ${data.message}`);
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//       setMessage("An error occurred. Please try again.");
//     }
//   };
//   const handleEditItem = (itemId) => {
//     navigate(`/add-item/${itemId}`);
//   };

//   return (
//     <div className="mainMenu">
//       <h2 className="menu-title">Place Your Order</h2>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={handleNameChange}
//             placeholder="Name"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//             placeholder="Email"
//           />
//         </div>
//         <div className="menu-grid">
//           {[...quantityMap].map(([item, quantity]) => (
//             <div key={item._id} className="menu-item">
//               <h3 className="title">{item.name}</h3>
//               <img
//                 src={item.image}
//                 style={{ height: "200px", width: "200px" }}
//               />
//               <div className="menu-item-content">
//                 <h4 className="title">{item.description}</h4>
//                 <h4>Price: ${item.price}</h4>
//                 <h4>Quantity: {quantity}</h4>
//                 <hr />
//                 <h4>Sub Total: ${parseInt(item.price) * quantity}</h4>
//                 <button
//                   className="btn btn-primary" type="button"
//                   onClick={() => handleEditItem(item._id)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-danger" type="button"
//                   onClick={() => callback(item._id)}
//                 >
//                   Remove
//                 </button>

//               </div>
//             </div>
//           ))}
//         </div>
//         <input id="newOrderBtn" type="submit" value="Place New Order" />
//       </form>
//     </div>
//   );
// };

// export default Cart;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ items, callback }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const BASE_URL = "https://backend-capstone-6-moig.onrender.com";
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/users`)
      .then((response) => response.json())
      .then((users) => setUsers(users))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  let quantityMap = new Map();
  for (const item of items) {
    if (quantityMap.has(item)) {
      let qt = quantityMap.get(item) + 1;
      quantityMap.set(item, qt);
    } else {
      quantityMap.set(item, 1);
    }
  }

  const handleUsernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentUser = users.find(user => user.name.toLowerCase() === username.toLowerCase() && user.email.toLowerCase() === email.toLowerCase());
    if (!currentUser) {
      setMessage("User not found");
      return;
    }

    const orderItems = items.map(item => ({
      menuId: item._id,
      quantity: quantityMap.get(item)
    }));

    const orderData = {
      userId: currentUser._id,
      orderItems,
      status: "Pending"
    };

    console.log("Order data being sent:", orderData);

    try {
      const response = await fetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Order successful!");
        setUsername("");
        setEmail("");
        setTimeout(() => {
          navigate("/order");
        }, 2000);
      } else {
        console.error("Order failed:", data);
        setMessage(`Order failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error during order placement:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const handleEditItem = (itemId) => {
    navigate(`/add-item/${itemId}`);
  };

  return (
    <div className="mainMenu">
      <h2 className="menu-title">Place Your Order</h2>
      {message && <p>{message}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
        </div>
        <div className="menu-grid">
          {[...quantityMap].map(([item, quantity]) => (
            <div key={item._id} className="menu-item">
              <h3 className="title">{item.name}</h3>
              <img src={item.image} style={{ height: "200px", width: "200px" }} />
              <div className="menu-item-content">
                <h4 className="title">{item.description}</h4>
                <h4>Price: ${item.price}</h4>
                <h4>Quantity: {quantity}</h4>
                <hr />
                <h4>Sub Total: ${parseInt(item.price) * quantity}</h4>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => handleEditItem(item._id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  type="button"
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
