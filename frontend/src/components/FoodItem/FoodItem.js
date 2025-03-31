import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { API_URL } from '../../config';

const FoodItem = ({ id, name, price, description, image }) => {
  //here all works exclded - div not decided as many div can use
  //const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    // need to give full css to edit cart this is like a cart
    <div className="food_item">
      <div className="food_item_img_container">
        <img alt={name} className="food_item_image" src={`${API_URL}/images/${image}`} />

        {
          // if our food item count is zero in that case provide add btn and if not then other this not work like if we add one item to one photo then all rewmove plus sign only from that imevery cart has diff signs
          !cartItems[id] ? (
            <img
              alt="Add to cart"
              className="add"
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
            />
          ) : (
            <div className="food_item_counter">
              <img
                alt="Remove from cart"
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
              />
              <p>{cartItems[id]}</p>
              <img alt="Add more" onClick={() => addToCart(id)} src={assets.add_icon_green} />
            </div>
          )
        }
      </div>
      <div className="food_item_info">
        <div className="food_item_name_rating">
          <p>{name}</p>
          {/* <p>helllo</p> */}
          <img alt="Rating" src={assets.rating_starts} />
        </div>
        <p className="food_item_des">{description}</p>
        <p className="food_item_price">${price}</p>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
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
