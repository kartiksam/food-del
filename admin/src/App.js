import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import Order from "./pages/Order/Order";
import List from "./pages/List/List";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <ToastContainer></ToastContainer>
      {/* navbar and side bhar and foter always and these pages accordign to routes so to make space below navbar we have given margin top ,left */}
      <Navbar></Navbar>
      <hr />
      <div className="app-content">
        <Sidebar></Sidebar>
        {/* for these 1st setup in index.jsor main.js */}
        <Routes>
          <Route path="/add" element={<Add></Add>} />
          <Route path="/list" element={<List></List>} />
          <Route path="/order" element={<Order></Order>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
