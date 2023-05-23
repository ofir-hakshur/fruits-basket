import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FruitLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FruitLabel = styled.div`
  margin-inline-end: 10px;
`;

export const DashLine = styled.div`
  flex: 1;
  height: 1px;
  margin-inline-end: 10px;
  border-bottom: 1px dashed black;
`;
