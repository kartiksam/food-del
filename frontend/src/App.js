import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import LoginPop from './components/LoginPopup/LoginPop';
import Verify from './pages/Verify/Verify';
import MyOrder from './pages/MyOrders/MyOrder';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Toaster position="top-center" />
      {showLogin ? <LoginPop setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}></Navbar>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<PlaceOrder />} path="/order" />
          <Route element={<Verify />} path="/verify" />
          <Route element={<MyOrder />} path="/myorders" />
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
