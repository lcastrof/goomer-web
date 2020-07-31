import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import styled from 'styled-components';
import Routes from './routes';
import Logo from './assets/logo.png';

import GlobalStyles from './styles/GlobalStyles';

const Container = styled.header`
  width: 100%;
  height: 62px;
  background: var(--primary);
  box-shadow: 0 4px 8px #00000029;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 60px;
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="logo" />
    </Container>
  );
};

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes />

        <GlobalStyles />
      </Router>
    </>
  );
};

export default App;
