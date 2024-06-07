import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    // when user logoout sent to homepage
    navigate("/");
  };

  return (
    <div className="navbar">
      {/* either here also can use div classname =left but anyhow */}
      <Link to="/">
        <img src={assets.logo} alt="logo " className="logo"></img>
      </Link>
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
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket"></img>
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {/* or wqe can do onclicl={fnname}or {()=>fnname(arg)} or {()=>setshowlogin(arg)=>arg+1} or apply <Link to="/login" anmd in app.js define login rpoute and open this componentr  */}
        {/* here is logic for if we have token then remove signib tn and show user profile there */}
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="profile link"></img>
            <ul className="nav-profile-dropdown">
              <li>
                <img src={assets.bag_icon} alt="bagicon"></img>
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="logouticon"></img>
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
