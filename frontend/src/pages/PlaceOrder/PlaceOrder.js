import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { API_URL } from '../../config';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems } = useContext(StoreContext);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let item_info = { ...item, quantity: cartItems[item._id] };
        orderItems.push(item_info);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    try {
      const response = await axios.post(API_URL + '/api/order/place', orderData, {
        headers: { token },
      });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert('Error');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error placing order');
    }
  };

  return (
    <form className="place-order" onSubmit={placeOrder}>
      <div className="place-left">
        <p className="title">Delivery Information</p>
        <div className="multifields">
          <input
            name="firstName"
            onChange={onChangeHandler}
            placeholder="First Name"
            required
            type="text"
            value={data.firstName}
          />
          <input
            name="lastName"
            onChange={onChangeHandler}
            placeholder="Last Name"
            required
            type="text"
            value={data.lastName}
          />
        </div>
        <input
          name="email"
          onChange={onChangeHandler}
          placeholder="Email address"
          required
          type="email"
          value={data.email}
        />
        <input
          name="street"
          onChange={onChangeHandler}
          placeholder="Street"
          required
          type="text"
          value={data.street}
        />
        <div className="multifields">
          <input
            name="city"
            onChange={onChangeHandler}
            placeholder="City"
            required
            type="text"
            value={data.city}
          />
          <input
            name="state"
            onChange={onChangeHandler}
            placeholder="State"
            required
            type="text"
            value={data.state}
          />
        </div>
        <div className="multifields">
          <input
            name="zipcode"
            onChange={onChangeHandler}
            placeholder="Zip code"
            required
            type="text"
            value={data.zipcode}
          />
          <input
            name="country"
            onChange={onChangeHandler}
            placeholder="Country"
            required
            type="text"
            value={data.country}
          />
        </div>
        <input
          name="phone"
          onChange={onChangeHandler}
          placeholder="Phone"
          required
          type="text"
          value={data.phone}
        />
      </div>
      <div className="place-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type="submit">Proceed To Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
