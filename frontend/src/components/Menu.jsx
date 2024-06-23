import { useState, useEffect } from 'react';


function Menus() {
  const [menu, setMenu] = useState([]);
  const [error, setError] = useState([]);

//   const BASE_URL = 'http://localhost:3000/menus';

  useEffect(() => {
    fetch('/api/menus')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(menu => setMenu(menu))
      .catch(error => {
        console.error('Error fetching the data:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!menu) {
    return <div>Loading...</div>;
  }





//   useEffect(() => {
//     const getMenu = async () => {
//       try {
//         const response = await fetch("/menus");
// console.log(response)
//         if (response.status !== 200) {
//           return;
//         }

//         const data = await response.json();
// console.log(data)
//         setMenu(data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     getMenu();

//   }, []);

return (
    <div>
      <h3>{menu.name}</h3>
      <img src={menu.image} style={{height: "200px", width: "200px"}}  />
      <h4>{menu.description}</h4>
      <h4>${menu.price}</h4>
    </div>
    );
  }
  
  export default Menus;