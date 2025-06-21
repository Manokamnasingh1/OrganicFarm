import React from 'react';
import './Home.css'; // Be sure to create this CSS file
import laptopImage from '../assets/laptop.jpg'; // Add the image used in your design here

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Empowering Farmers with Digital Growth</h1>
<p>"Grow More With Less Space – Rooftop Farming Made Simple!"</p>
          <p>Join us in revolutionizing agriculture with technology.</p>
           <a href="#request">
  <button className="cta-button">Tell Us About Your Ideas</button>
</a>



        </div>

        <div className="hero-image">
          <img src={laptopImage} alt="Laptop showcasing landing page" />
         
        </div>
      </div>
    </section>
  );
}
