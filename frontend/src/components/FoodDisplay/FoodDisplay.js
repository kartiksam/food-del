import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food_display" id="food_display">
      <h2>Top dishes near you</h2>
      {/* to make all in one page will give css to this */}
      <div className="food_display_list">
        {food_list.map((item, index) => {
          if (category === 'all' || category === item.category) {
            return (
              <FoodItem
                description={item.description}
                id={item._id}
                image={item.image}
                key={index}
                name={item.name}
                price={item.price}
              />
            );
          }
          return null; // Return null for non-matching categories
        })}
      </div>
    </div>
  );
};

FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired,
};

export default FoodDisplay;
