import React, { useEffect, useState } from 'react';
import './Home.css';
import { FaArrowRight } from 'react-icons/fa';
import image from '../assets/image2.jpg'; 
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100); // Delay for animation
    return () => clearTimeout(timer);
  }, []);

  const handleClick=()=>navigate("/form")

  return (
    <div className="home-container">
     

      <div className="carousel">
        <div className="carousel-item">
          <img src={image} alt="carousel-img" className="carousel-image" />
        </div>
      </div>
<span className='quote'><h1><span className="gradient-text">Good design</span> is about creating <span className="gradient-text">spaces</span> that feel authentic, breathe life, and reflect the <span className="gradient-text">soul</span> of those who live within them</h1></span>
      <button className={`center-button ${visible ? 'visible' : ''}`} onClick={handleClick}>
        Design Your Home <FaArrowRight className="arrow" />
      </button>
    </div>
  );
};

export default Home;
