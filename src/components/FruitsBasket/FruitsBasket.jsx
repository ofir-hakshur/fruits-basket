import { useState } from 'react';
import { Dropdown } from './Dropdown';
import { BasketItems } from './BasketItems';
import * as S from './FruitsBasket.style';

export const FruitsBasket = () => {
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

  return (
    <S.FruitsBasketContainer>
      <Dropdown fruits={fruits} setFruits={setFruits} setSelectedFruits={setSelectedFruits} />
      <BasketItems
        selectedFruits={selectedFruits}
        setSelectedFruits={setSelectedFruits}
        setFruits={setFruits}
        setSelectedFruitDetails={setSelectedFruitDetails}
      />
    </S.FruitsBasketContainer>
  );
};
