import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>AFOOD Restaurant</h1>
      <div className="about-content">
        <img
          src="https://media3.giphy.com/media/Rhr5BoMsrkb5ZloFKc/giphy.gif"
          style={{ width: "100%", height: "100%" }}
          alt="Restaurant"
          className="about-image"
        />
        <p>
          Welcome to AFOOD, where we offer an exquisite dining experience that
          combines delicious cuisine from Cameroon in Central Africa with a
          warm, inviting atmosphere. Established in 2024, we have been committed
          to serving high-quality food made from the freshest ingredients.
        </p>
        <p>
          Our menu features a diverse selection of dishes, including classic
          favorites and innovative new creations. Whether you're in the mood for
          a hearty meal or a light snack, we have something for everyone. We
          take pride in our culinary craftsmanship and are dedicated to
          providing our guests with a memorable dining experience.
        </p>
        <p>
          At AFOOD, we believe that great food and excellent service go hand in
          hand. Our friendly and attentive staff are here to ensure that your
          visit is enjoyable from start to finish. We value our customers and
          strive to create a welcoming environment where everyone feels at home.
        </p>
        <p>
          Thank you for choosing AFOOD. We look forward to serving you and hope
          to see you again soon!
        </p>
      </div>
    </div>
  );
};

export default About;
