import styled, { keyframes } from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div``;

export const Tabs = styled.div`
  margin-top: 16px;
  > button {
    height: 42px;
    border-bottom: 1px solid var(--gray);
    background: var(--white);
    text-align: left;
    margin-bottom: 16px;

    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
`;

export const ArrowIcon = styled(FiChevronDown)`
  width: 16px;
  height: 16px;
`;

export const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 850px;
  animation: ${fadeIn} 1s;
`;
