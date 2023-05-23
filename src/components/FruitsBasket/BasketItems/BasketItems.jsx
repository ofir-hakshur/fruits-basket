import { BasketItem } from './BasketItem';
import * as S from './BasketItems.style';

export const BasketItems = ({
  selectedFruits,
  setSelectedFruits,
  setFruits,
  setSelectedFruitDetails,
}) => {
  return (
    <S.BasketItemsContainer>
      {selectedFruits.map((fruit) => (
        <BasketItem
          key={fruit.id}
          fruit={fruit}
          setSelectedFruits={setSelectedFruits}
          setFruits={setFruits}
          setSelectedFruitDetails={setSelectedFruitDetails}
        />
      ))}
    </S.BasketItemsContainer>
  );
};
