import { useContext } from 'react';
import { BasketItem } from './BasketItem';
import { AppContext } from '../../../App.context';
import * as S from './BasketItems.style';

export const BasketItems = () => {
  const { selectedFruits } = useContext(AppContext);

  return (
    <S.BasketItemsContainer>
      {selectedFruits.map((fruit) => (
        <BasketItem key={fruit.id} fruit={fruit} />
      ))}
    </S.BasketItemsContainer>
  );
};
