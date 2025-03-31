import React, { useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../config';
import './Verify.css';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');
  const navigate = useNavigate();

  const verifyPayment = useCallback(async () => {
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
  }, [success, orderId, navigate]);

  useEffect(() => {
    if (success !== null && orderId !== null) {
      verifyPayment();
    } else {
      console.error('Missing required parameters.');
      navigate('/');
    }
  }, [success, orderId, navigate, verifyPayment]);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
