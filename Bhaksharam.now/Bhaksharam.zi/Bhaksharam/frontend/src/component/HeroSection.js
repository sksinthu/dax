
import React from 'react';
import { Link } from 'react-router-dom';
import './../css/HeroSection.css'; 
import Feature from "./FeatureSection";
import Foodmaker from "./Foodmaker";
const HeroSection = () => {
  return (
  <>
    <section className="hero">
      <div className="hero-content">
        <h1>Be The Fastest In Delivery Your <span>Food</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, purus sit amet.</p>
        <Link to="/menu">
          <button className="get-started-btn">Our Menu</button>
        </Link>
      </div>
    
      <div className="hero-images">
        <img src="https://inemai.com/wp-content/uploads/2019/02/Dosai-300x185.png" style={{borderRadius:"12px"}} alt="Food 1" />
       
      </div>
    </section>
    <Feature/>
    <Foodmaker/>
    </>
  );
};

export default HeroSection;
