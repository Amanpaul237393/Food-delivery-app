import React, { useContext } from "react";
import "./Kart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const kart = () => {
  const { removefromkart, kartItems, food_list, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="kart">
      <div className="kart-items">
        <div className="kart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (kartItems[item._id] > 0) {
            return (
              <div>
                <div className="kart-items-title kart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{kartItems[item._id]}</p>
                  <p>${item.price * kartItems[item._id]}</p>
                  <p onClick={() => removefromkart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="kart-bottom">
        <div className="kart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="kart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="kart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="kart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            Proceed to checkout
          </button>
        </div>
        <div className="kart-promo-code">
          <div>
            <p>If you have a promo code enter it here</p>
            <div className="kart-promocode-input">
              <input type="tex" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default kart;
