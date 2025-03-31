import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <img alt="logo " className="logo" src={assets.logo}></img>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest
          ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate
          your dining experience, one delicious meal at a time.
        </p>
        <div className="logos">
          <img alt="" src={assets.facebook_icon} />
          <img alt="" src={assets.linkedin_icon} />
          <img alt="" src={assets.twitter_icon} />
        </div>
      </div>
      <div className="middle">
        <h1>COMPANY</h1>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Deleivery</li>
          <li>Privacy policy </li>
        </ul>
      </div>
      <div className="right">
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>+91-7011679411</li>
          <li>kartiksam123489@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
