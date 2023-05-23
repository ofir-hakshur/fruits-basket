import { useState } from 'react';
import { toast } from 'react-toastify';
import * as S from './Dropdown.style';

export const Dropdown = ({ fruits, setFruits, setSelectedFruits }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = async (fruitName) => {
    try {
      const res = await fetch(
        `https://front-end-exam-dot-winky-apis.ew.r.appspot.com/products/${fruitName}`,
      );
      const fruit = await res.json();

      // Edge case - no data for melone
      if (fruit.error) {
        toast.info(`${fruitName} is not exist`, {
          autoClose: 2000,
        });
        setIsOpen(false);
        return;
      }

      if (fruit.stock !== 0) {
        setSelectedFruits((prev) => [...prev, fruit]);
        setFruits([...fruits].filter((fruit) => fruit !== fruitName));
      } else {
        toast.info(`Sorry, ${fruitName} not in stock`, {
          autoClose: 2000,
        });
      }
      setIsOpen(false);
    } catch (e) {
      console.log('error occurred');
    }
  };

  return (
    <S.DropdownContainer>
      <S.LabelContainer onClick={() => setIsOpen((prev) => !prev)}>
        Select to add item to basket
      </S.LabelContainer>
      {isOpen && (
        <S.FruitsListContainer>
          {fruits.map((fruit) => (
            <S.FruitContainer key={fruit} onClick={() => handleOnClick(fruit)}>
              {fruit}
            </S.FruitContainer>
          ))}
        </S.FruitsListContainer>
      )}
    </S.DropdownContainer>
  );
};
