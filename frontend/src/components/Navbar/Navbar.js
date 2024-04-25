import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      {/* either here also can use div classname =left but anyhow */}
      <img src={assets.logo} alt="logo " className="logo"></img>
      <ul className="navbar-menu">
        {/* to make underline in one of at a time so that snd chnhe using set functiononClick={()=>setMenu("home")} */}
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>
      <div className="right">
        <img src={assets.search_icon} alt="search"></img>
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket"></img>
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
