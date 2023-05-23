import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 15px;
  border-radius: 5px;
  border: 1px solid #d0d0d0;
  height: 30px;
  box-shadow: 0 0 20px #d0d0d0;
  cursor: pointer;
  color: #90b4d2;
`;

export const FruitsListContainer = styled.div`
  position: absolute;
  top: 45px;
  left: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid #d0d0d0;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 20px #d0d0d0;
`;

export const FruitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin: 10px;
  cursor: pointer;
  color: #90b4d2;
`;
