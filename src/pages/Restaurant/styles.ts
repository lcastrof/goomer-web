import styled, { css } from 'styled-components';
import { FiSearch, FiChevronDown } from 'react-icons/fi';

interface FoodCardsProps {
  isOpen: boolean;
}
interface PriceProps {
  isPromo?: boolean;
}

export const Container = styled.div`
  max-width: 802px;
  height: 100%;
  padding: 0 75px;

  display: flex;
`;

export const Content = styled.div`
  margin-top: 24px;
`;

export const RestaurantInfoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 145px;
    margin-right: 21px;
    flex-shrink: 0;
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--gray);
  margin-top: 11px;

  span {
    display: block;

    margin-top: 4px;
  }

  > strong {
    font-size: 24px;
  }

  .description {
    font-weight: 400;
    margin-top: 4px;
    max-width: 529px;
  }

  .schedule {
    font-weight: 300;
    font-size: 12px;

    strong {
      font-size: 12px;
      font-weight: bold;
    }
  }
`;

export const RestaurantSchedule = styled.div``;

export const SearchInputWrapper = styled.div`
  margin-top: 16px;
  box-shadow: 0px 2px 4px #0000001a;
  border-radius: 20px;
  width: 802px;
  height: 40px;
  display: flex;
  background: var(--plate-search);
  position: relative;

  button {
    width: 213px;
    height: 40px;
    border-radius: 20px 0 0 20px;
    cursor: default;
    background: var(--white);
    color: var(--gray);
  }

  input {
    background: var(--plate-search);
    display: flex;
    flex: 1;
    border-radius: 0 20px 20px 0;
    padding: 12px 39px;
    color: var(--gray);

    ~ svg {
      position: absolute;
      top: 12px;
      right: 31px;

      transition: 180ms ease-in-out;
    }

    &:focus {
      border: 1.3px solid var(--primary);
      border-left: 0;

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

export const ExpandableTabs = styled.div`
  margin-top: 35.5px;
  max-width: 802px;
`;

export const Tab = styled.div<FoodCardsProps>`
  margin-top: 16px;
  > button {
    height: 42px;
    border-bottom: 1px solid var(--gray);
    background: var(--white);
    text-align: left;
    margin-bottom: 24px;
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

export const FoodCards = styled.div<FoodCardsProps>`
  display: flex;
  margin-top: 24px;
  flex-wrap: wrap;
  width: 850px;
`;

export const Card = styled.a`
  display: flex;
  width: 386px;
  height: 115px;
  box-shadow: 0px 4px 8px #00000029;
  margin-right: 30px;
  margin-top: 24px;
  transition: opacity 0.2s;

  img {
    height: 115px;
    margin-right: 16px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const FoodInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 15px;
`;

export const FoodInfo = styled.div<PriceProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  ${(props) =>
    props.isPromo &&
    css`
      &::after {
        content: 'Promo Almoço';
        position: absolute;
        color: var(--white);
        font-size: 8px;

        right: 2px;
        top: -10px;

        width: 103px;
        height: 21px;

        background: var(--secondary);
        border-radius: 11px;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}

  > strong {
    color: var(--gray);
  }

  > span {
    font-size: 12px;
    margin-top: 8px;
    font-weight: 400;
  }
`;

export const Price = styled.div<PriceProps>`
  margin-top: 8px;
  color: var(--primary);
  position: relative;

  ${(props) =>
    props.isPromo &&
    css`
      &::after {
        content: 'R$ 20.90';
        position: relative;
        color: var(--light-gray);
        font-size: 12px;
        left: 7px;
        text-decoration: line-through;
      }
    `}
`;
