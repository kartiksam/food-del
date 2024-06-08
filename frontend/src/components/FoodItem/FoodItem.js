import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {
  //here all works exclded - div not decided as many div can use
  //const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const url = "http://localhost:4000";
  return (
    // need to give full css to edit cart this is like a cart
    <div className="food_item">
      <div className="food_item_img_container">
        <img
          className="food_item_image"
          src={url + "/images/" + image}
          alt="fooditemimage"
        />

        {
          // if our food item count is zero in that case provide add btn and if not then other this not work like if we add one item to one photo then all rewmove plus sign only from that imevery cart has diff signs
          !cartItems[id] ? (
            <img
              className="add"
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              alt=" "
            ></img>
          ) : (
            <div className="food_item_counter">
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p>{cartItems[id]}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )
        }
      </div>
      <div className="food_item_info">
        <div className="food_item_name_rating">
          <p>{name}</p>
          {/* <p>helllo</p> */}
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food_item_des">{description}</p>
        <p className="food_item_price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
{
  /* {
          // if our food item count is zero in that case provide add btn and if not then other this not work like if we add one item to one photo then all rewmove plus sign only from that imevery cart has diff signs
          !itemCount ? (
            <img
              className="add"
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_white}
              alt=" "
            ></img>
          ) : (
            <div className="food_item_counter">
              <img
                onClick={() => setItemCount((prev) => prev - 1)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p>{itemCount}</p>
              <img
                onClick={() => setItemCount((prev) => prev + 1)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )
        } */
}
