import styled from 'styled-components';

export const BasketItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 300px;
  padding: 10px;
  border-radius: 5px;
  gap: 20px;
  border: 1px solid #d0d0d0;
  box-shadow: 0 0 20px #d0d0d0;
  color: #90b4d2;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FruitNameContainer = styled.div`
  width: 100%;
  color: white;
  margin-inline-end: 20px;
  background-color: ${({ fruitColor }) => fruitColor ?? 'none'};
`;

export const RemoveItemContainer = styled.div`
  cursor: pointer;
`;

export const CenterRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: #90b4d2;
`;

export const TextInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;
