import { useState } from 'react';
import { Dropdown } from './Dropdown';
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

  return (
    <S.FruitsBasketContainer>
      <Dropdown fruits={fruits} setFruits={setFruits} setSelectedFruits={setSelectedFruits} />
    </S.FruitsBasketContainer>
  );
};
