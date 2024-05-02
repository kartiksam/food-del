import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
const FoodItem = ({ id, name, price, description, image }) => {
  //here all works exclded - div not decided as many div can use
  return (
    // need to give full css to edit cart this is like a cart
    <div className="food_item">
      <div className="food_item_img_container">
        <img className="food_item_image" src={image} alt="fooditemimage" />
      </div>
      <div className="food_item_info">
        <div className="food_item_name_rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food_item_des">{description}</p>
        <p className="food_item_price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
