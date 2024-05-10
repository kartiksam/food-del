import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <img src={assets.logo} alt="logo " className="logo"></img>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <div className="logos">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
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
