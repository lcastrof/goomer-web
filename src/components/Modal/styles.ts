import styled from 'styled-components';

export const Background = styled.a`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: black;
  z-index: 1;
  display: block;
  cursor: default;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  width: 601px;
  height: 484px;
  background: var(--white);
  border-radius: 8px;
  box-shadow: 0 4px 8px #00000033;

  padding: 23px 24px 19.5px 24px;
`;

export const CloseButton = styled.a`
  position: absolute;
  width: 48px;
  height: 48px;
  background: var(--white);
  box-shadow: 0 2px 4px #00000029;
  border-radius: 50%;

  left: calc(553px + 24px);
  top: -24px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgHolder = styled.div`
  width: 553px;
  height: 196px;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const PlateInfoWrapper = styled.div`
  margin-top: 45.27px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  span {
    font-size: 30px;
    color: var(--primary);
  }
`;

export const PlateDescription = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--gray);
  width: 380px;

  h1 {
    font-size: 24px;
  }

  p {
    font-weight: 300px;
    margin-top: 5px;
  }
`;

export const Footer = styled.div`
  margin-top: 24.92px;
  padding: 25.9px 11.99px 20.51px 14.28px;
  border-top: 1px solid var(--light-gray);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddRemoveButton = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  border: 1px solid var(--light-gray);
  border-radius: 8px;
  color: var(--primary);

  span {
    font-size: 20px;
  }
`;

export const AddButton = styled.button`
  color: var(--white);
  background: var(--primary);
  padding: 13px 12px;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  font-size: 24px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
