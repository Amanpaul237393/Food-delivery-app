import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, desription, image }) => {
  const { kartItems, addinkart, removefromkart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />
        {!kartItems[id] ? (
          <img
            className="add"
            onClick={() => addinkart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removefromkart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{kartItems[id]}</p>
            <img
              onClick={() => addinkart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{desription}</p>
        <p className="food-ietm-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
