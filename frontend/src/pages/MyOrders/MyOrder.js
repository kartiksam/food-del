import React, { useContext, useEffect, useState } from 'react';
import './MyOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';
import { API_URL } from '../../config';

const MyOrder = () => {
  const [data, setData] = useState([]);
  const { token } = useContext(StoreContext);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        API_URL + '/api/order/userorders',
        {},
        { headers: { token } }
      );
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [token]);

  return (
    <div className="my-order">
      <h2>My Orders</h2>
      <div className="order">
        {data.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.rating_starts} alt="Rating" />
            <p>{order.items.map((item) => item.name).join(', ')}</p>
            <p>${order.amount}</p>
            <p>{order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
