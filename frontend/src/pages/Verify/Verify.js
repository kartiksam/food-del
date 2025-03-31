import React, { useContext, useEffect } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { API_URL } from '../../config';

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(API_URL + '/api/order/verify', {
        success,
        orderId,
      });
      if (response.data.success) {
        navigate('/myorders');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
      navigate('/');
    }
  };

  useEffect(() => {
    if (success !== null && orderId !== null) {
      verifyPayment();
    } else {
      console.error('Missing required parameters.');
      navigate('/');
    }
  }, [success, orderId]);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
