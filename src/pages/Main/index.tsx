import React, { useEffect } from 'react';
import api from '../../services/api';

import { Container } from './styles';

const Main: React.FC = () => {
  useEffect(() => {
    async function loadRestaurants(): Promise<void> {
      const { data } = await api.get('/');

      console.log(data);
    }

    loadRestaurants();
  }, []);

  return <Container>Main page</Container>;
};

export default Main;
