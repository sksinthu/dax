import React, { createContext, useContext, useState } from 'react';
import foodImage1 from '../img/idiyappam.jpeg'; // Idiyappam
import foodImage2 from '../img/idli1.jpg'; // Idli
import foodImage3 from '../img/dosa1.jpg'; // Dosa
import foodImage4 from '../img/pittu.jpeg'; // Pittu

const FoodContext = createContext();

export const useFood = () => {
  return useContext(FoodContext);
};

export const FoodProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState([
    { id: 1, name: 'Idiyappam', price: 100, image: foodImage1 },
    { id: 2, name: 'String Hoppers', price: 80, image: foodImage2 },
    { id: 3, name: 'Dosa', price: 90, image: foodImage3 },
    { id: 4, name: 'Pittu', price: 120, image: foodImage4 },
  ]);

  const addFoodItem = (item) => {
    setFoodItems((prevItems) => [...prevItems, item]);
  };

  const editFoodItem = (updatedItem) => {
    setFoodItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const deleteFoodItem = (id) => {
    setFoodItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <FoodContext.Provider value={{ foodItems, addFoodItem, editFoodItem, deleteFoodItem }}>
      {children}
    </FoodContext.Provider>
  );
};
