import axios from "axios";
import { createContext, useEffect, useState } from "react";
//import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);
const url = "http://localhost:4000";
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  const addToCart = async (itemId) => {
    //if adding the product first time in the cart
    // this logic is for frontend when add come into obj and us that to displpay
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    // this is only to add data in the backend
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      // cartItems is an obj and here item provides key
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };
  // to prevent from when we refresh the page the user will noit logout after once login
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        // token is the key name
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  // will run this fun whenever web page loaded
  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    console.log("response" + response);
    setFoodList(response.data.data);
  };
  const loadCartData = async (token) => {
    const response = await axios.get(
      url + "/api/cart/get",

      { headers: { token } }
    );
    //previoult was hardcode now come from database and then display thta
    setCartItems(response.data.cartData);
  };
  // here not added anydata to it so empty before that hardcoded so will create a function and call api to fetch data and dispay there

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);
  const contextValue = {
    //if we add any ele in this oj we can access that ele in any component using the context and add some part to idex.js then can use ad easy from props
    food_list,
    setCartItems,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,

    token,
    setToken,
    url,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
