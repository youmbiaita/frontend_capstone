import React from 'react';

const HomePage = () => {
  return (
    <div className='homepage'>
      <h1>Welcome to the Restaurant</h1>
      <p>Enjoy our delicious food!</p>
      <img src="./src/images/cap.jpg" />
      <div className='home-btn'>
      <a href="/register">Registration</a>
      <a href="/newOrder">Place Order</a>
      </div>
      
    </div>
  );
};

export default HomePage;
