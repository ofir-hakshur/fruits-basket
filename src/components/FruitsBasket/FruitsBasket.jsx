import { useContext } from 'react';
import { toast } from 'react-toastify';
import { Dropdown } from './Dropdown';
import { Description } from './Description/';
import { BasketItems } from './BasketItems';
import * as S from './FruitsBasket.style';
import { AppContext } from '../../App.context';

export const FruitsBasket = () => {
  const { selectedFruitDetails, selectedFruits } = useContext(AppContext);

  const handleOnClick = async () => {
    if (!Object.keys(selectedFruitDetails).length) {
      return;
    }
    try {
      const payload = [];
      for (const [key, value] of Object.entries(selectedFruitDetails)) {
        payload.push({ id: key, amount: value.quantity });
      }
      const res = await fetch('https://front-end-exam-dot-winky-apis.ew.r.appspot.com/products/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error('Request failed');
      }
      toast.info('Confirm to send the request', {
        autoClose: 2000,
      });
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <S.FruitsBasketContainer>
      <Dropdown />
      <BasketItems />
      {!!selectedFruits.length && (
        <>
          <S.HorizontalDivider />
          <Description selectedFruitDetails={selectedFruitDetails} />
          <S.SubmitContainer onClick={handleOnClick}>SUBMIT</S.SubmitContainer>
        </>
      )}
    </S.FruitsBasketContainer>
  );
};
