import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

interface RestaurantParams {
  id: string;
}

const Restaurant: React.FC = () => {
  const { params } = useRouteMatch<RestaurantParams>();

  return <Container>{params.id}</Container>;
};

export default Restaurant;
