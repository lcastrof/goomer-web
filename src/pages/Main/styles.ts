import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  padding: 32px 75px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeMessage = styled.div`
  text-align: center;
  font-size: 24px;

  color: var(--gray);
`;

export const SearchInput = styled.div`
  display: flex;
  width: 840px;
  height: 40px;
  margin-top: 32px;

  position: relative;

  input {
    width: 100%;
    height: 100%;
    background: var(--restaurant-search);
    box-shadow: 0 2px 4px #00000029;
    border-radius: 45px;
    padding: 10px 39px;
    color: var(--gray);

    &::placeholder {
      color: var(--gray);
    }

    ~ svg {
      position: relative;
      top: 12px;
      left: -31px;

      transition: 180ms ease-in-out;
    }

    &:focus {
      border: 1px solid var(--primary);

      ~ svg {
        color: var(--primary);
      }
    }
  }
`;

export const SearchIcon = styled(FiSearch)`
  width: 16px;
  height: 16px;

  color: var(--gray);
`;

export const Cards = styled.div`
  margin-top: 46px;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  flex-wrap: wrap;
`;

export const RestaurantCard = styled(Link)`
  display: flex;
  align-items: center;
  width: 367px;
  height: 100px;
  box-shadow: 0 2px 4px #00000029;
  position: relative;
  margin-bottom: 52px;
  margin-right: 48px;
  text-decoration: none;

  img {
    width: 100px;
    height: 100px;
    margin-right: 25px;
  }

  &::after {
    content: 'Aberto agora';
    position: absolute;
    right: -20px;
    top: -20px;

    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    background: var(--secondary);
    border-radius: 50%;

    color: var(--white);
    font-size: 8px;
    font-weight: bold;
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  color: var(--gray);

  span {
    font-size: 12px;
    font-weight: 400;
  }
`;
