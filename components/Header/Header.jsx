import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverese menu featuring a delectable array of dishes
          creafted with the finest ingridents and cuinary expertise. Our mission
          is to satisfy your cravings and elevate your dinning experience, one
          delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
