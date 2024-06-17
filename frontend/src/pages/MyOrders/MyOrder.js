import React, { useContext, useEffect, useState } from "react";
import "./MyOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";
const MyOrder = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);
  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorder",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    //console.log(response.data.data);
  };
  //   need to call this function oir api whenever this component will be loaded
  useEffect(() => {
    if (token) {
      fetchOrders();
    }
    // whenevr token will be change this function will execute
  }, [token]);
  return (
    <div className="my-orders">
      {/* create ui to display api data */}
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt=" " />
              <p>
                {order.items.map((item, index) => {
                  // access the last item of user order
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + " ,";
                  }
                })}
              </p>
              <p>${order.amount}</p>
              <p>Items:{order.items.length}</p>
              <p>
                <span>&#x25cf;</span>
                <b>{order.status}</b>
              </p>
              <button>Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrder;
