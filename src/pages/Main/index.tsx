/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import api from '../../services/api';

import {
  Container,
  WelcomeMessage,
  SearchInput,
  SearchIcon,
  Cards,
  RestaurantCard,
  RestaurantInfo,
} from './styles';

const Main: React.FC = () => {
  useEffect(() => {
    async function loadRestaurants(): Promise<void> {
      const { data } = await api.get('/');

      console.log(data);
    }

    loadRestaurants();
  }, []);

  return (
    <Container>
      <WelcomeMessage>Bem-vindo ao Lista Rango</WelcomeMessage>

      <SearchInput>
        <input type="text" placeholder="Buscar estabelecimento" />
        <SearchIcon />
      </SearchInput>

      <Cards>
        <RestaurantCard to="/restaurant">
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/78/26/restaurant-logo-design-vector-10067826.jpg"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereco do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/78/26/restaurant-logo-design-vector-10067826.jpg"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereco do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/78/26/restaurant-logo-design-vector-10067826.jpg"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereco do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/78/26/restaurant-logo-design-vector-10067826.jpg"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereco do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/78/26/restaurant-logo-design-vector-10067826.jpg"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereco do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/78/26/restaurant-logo-design-vector-10067826.jpg"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereco do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/78/26/restaurant-logo-design-vector-10067826.jpg"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereco do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/78/26/restaurant-logo-design-vector-10067826.jpg"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereco do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/78/26/restaurant-logo-design-vector-10067826.jpg"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereco do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/78/26/restaurant-logo-design-vector-10067826.jpg"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereco do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/78/26/restaurant-logo-design-vector-10067826.jpg"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereco do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/78/26/restaurant-logo-design-vector-10067826.jpg"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereco do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>
      </Cards>
    </Container>
  );
};

export default Main;
