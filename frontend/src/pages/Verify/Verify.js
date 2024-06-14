import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();
  const verifyPayment = async () => {
    console.log("URL:", url);
    console.log("Success:", success);
    console.log("Order ID:", orderId);
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.successs) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    if (url && success !== null && orderId !== null) {
      verifyPayment();
    } else {
      console.error("Missing required parameters.");
    }
  }, [url, success, orderId]);
  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
