import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [kartItems, setKartItems] = useState({});

  const addinkart = (itemId) => {
    if (!kartItems[itemId]) {
      setKartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setKartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removefromkart = (itemId) => {
    setKartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in kartItems) {
      if (kartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * kartItems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    kartItems,
    setKartItems,
    addinkart,
    removefromkart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
