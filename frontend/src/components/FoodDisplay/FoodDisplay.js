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
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
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
