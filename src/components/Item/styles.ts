import styled, { css } from 'styled-components';

interface PriceProps {
  isPromo?: boolean;
}

export const Card = styled.a`
  display: flex;
  width: 386px;
  height: 115px;
  box-shadow: 0px 4px 8px #00000029;
  margin-right: 30px;
  transition: opacity 0.2s;
  margin-bottom: 24px;

  img {
    width: 115px;
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
        font-size: 10px;
        font-weight: bold;

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
    max-height: 32px;
    overflow: hidden;
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
