import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const Container = styled.div`
  height: 100%;
  padding: 0 75px 25px;

  display: flex;
`;

export const Content = styled.div`
  margin-top: 24px;
  max-width: 802px;
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

export const Banner = styled.div`
  width: 282px;
  height: 500px;
  background: var(--plate-search);

  margin-left: 134px;
  margin-top: 180px;
`;
