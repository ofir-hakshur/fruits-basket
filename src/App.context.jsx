import { createContext, useState } from 'react';

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [fruits, setFruits] = useState([
    'apple',
    'carrot',
    'melone',
    'pear',
    'lemon',
    'orange',
    'salad',
  ]);
  const [selectedFruits, setSelectedFruits] = useState([]);
  const [selectedFruitDetails, setSelectedFruitDetails] = useState({});

  const value = {
    fruits,
    setFruits,
    selectedFruits,
    setSelectedFruits,
    selectedFruitDetails,
    setSelectedFruitDetails,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
