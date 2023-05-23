import * as S from './Description.style';

export const Description = ({ selectedFruitDetails }) => {
  const totalPrice = Object.values(selectedFruitDetails).reduce((acc, curr) => acc + curr.price, 0);
  return (
    <S.DescriptionContainer>
      Item list:
      {!!Object.keys(selectedFruitDetails).length && (
        <>
          {Object.entries(selectedFruitDetails).map(([key, value]) => (
            <S.FruitLine key={key}>
              <S.FruitLabel>{value.name}</S.FruitLabel>
              <S.DashLine />
              {value.quantity} KG
            </S.FruitLine>
          ))}
        </>
      )}
      <div>Total price: {totalPrice}$ </div>
    </S.DescriptionContainer>
  );
};
