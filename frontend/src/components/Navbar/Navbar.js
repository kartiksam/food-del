import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    toast.success('Logged out successfully');
    // when user logoout sent to homepage
    navigate('/');
  };

  return (
    <div className="navbar">
      {/* either here also can use div classname =left but anyhow */}
      <Link to="/">
        <img alt="logo " className="logo" src={assets.logo}></img>
      </Link>
      <ul className="navbar-menu">
        {/* to make underline in one of at a time so that snd chnhe using set functiononClick={()=>setMenu("home")} */}
        <li className={menu === 'home' ? 'active' : ''} onClick={() => setMenu('home')}>
          home
        </li>
        <li className={menu === 'menu' ? 'active' : ''} onClick={() => setMenu('menu')}>
          menu
        </li>
        <li className={menu === 'mobile-app' ? 'active' : ''} onClick={() => setMenu('mobile-app')}>
          mobile-app
        </li>
        <li className={menu === 'contact us' ? 'active' : ''} onClick={() => setMenu('contact us')}>
          contact us
        </li>
      </ul>
      <div className="right">
        <img alt="search" src={assets.search_icon}></img>
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img alt="basket" src={assets.basket_icon}></img>
          </Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>
        {/* or wqe can do onclicl={fnname}or {()=>fnname(arg)} or {()=>setshowlogin(arg)=>arg+1} or apply <Link to="/login" anmd in app.js define login rpoute and open this componentr  */}
        {/* here is logic for if we have token then remove signib tn and show user profile there */}
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <img alt="profile link" src={assets.profile_icon}></img>
            <ul className="nav-profile-dropdown">
              <li>
                <img alt="bagicon" src={assets.bag_icon}></img>
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img alt="logouticon" src={assets.logout_icon}></img>
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Navbar;
