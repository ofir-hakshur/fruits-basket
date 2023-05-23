import { useEffect, useState } from 'react';
import * as S from './BasketItem.style';

export const BasketItem = ({ fruit, setSelectedFruits, setFruits, setSelectedFruitDetails }) => {
  const [quantity, setQuantity] = useState(0);

  const handleOnRemove = () => {
    setSelectedFruits((prev) => [...prev].filter((e) => e.id !== fruit.id));
    setFruits((prev) => [...prev, fruit.id]);
  };

  const handleOnChange = (e) => {
    setQuantity(e.target.value);
    setSelectedFruitDetails((prev) => {
      const fruitsBasketPrices = { ...prev };
      if (e.target.value == 0) {
        delete fruitsBasketPrices[fruit.id];
      } else {
        fruitsBasketPrices[fruit.id] = {
          name: fruit.name,
          price: e.target.value * fruit.price,
          quantity: e.target.value,
        };
      }
      return fruitsBasketPrices;
    });
  };

  // Remove the fruit from the fruitsBasketPrices.
  useEffect(() => {
    return () =>
      setSelectedFruitDetails((prev) => {
        const prevObject = { ...prev };
        delete prevObject[fruit.id];
        return prevObject;
      });
  }, []);

  return (
    <S.BasketItemContainer>
      <S.HeaderContainer>
        <S.FruitNameContainer fruitColor={fruit.color}>{fruit.name}</S.FruitNameContainer>
        <S.RemoveItemContainer onClick={() => handleOnRemove(fruit)}>X</S.RemoveItemContainer>
      </S.HeaderContainer>
      <S.CenterRow>
        Select quantity:
        <input type="range" value={quantity} onChange={handleOnChange} min={0} max={fruit.stock} />
        <S.TextInputWrapper>
          <input type="text" readOnly value={quantity} style={{ width: 15, marginInlineEnd: 3 }} />
          KG
        </S.TextInputWrapper>
      </S.CenterRow>
      Price: ${quantity * fruit.price}
    </S.BasketItemContainer>
  );
};
