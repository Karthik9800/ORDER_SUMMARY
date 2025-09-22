// context/AppContext.js
import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Slides");

  const toggleFavorite = (item) => {
    if (favorites.find((f) => f.id === item.id)) {
      setFavorites(favorites.filter((f) => f.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <AppContext.Provider
      value={{ cart, favorites, toggleFavorite, addToCart, selectedTab, setSelectedTab }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
