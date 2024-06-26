import React from 'react';

const HomePage = () => {
  return (
    <div className='homepage'>
      <h1>Welcome to AFOOD Restaurant</h1>
      <p className='enjoy'>Enjoy our delicious food!</p>
      <img
       src="https://previews.123rf.com/images/didecs/didecs1504/didecs150400007/38487573-old-recipe-note-background-concept.jpg" />
     
      <div className='home-btn'>
      <a href="/register">Registration</a>
      <a href="/newOrder">Place Order</a>
      </div>      
    </div>
    
  );
};

export default HomePage;
