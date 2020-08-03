/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// import api from '../../services/api';

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
  // useEffect(() => {
  //   async function loadRestaurants(): Promise<void> {
  //     const { data } = await api.get('/');

  //     console.log(data);
  //   }

  //   loadRestaurants();
  // }, []);

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
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereço do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereço do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereço do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant" className="closed">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereço do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant" className="closed">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereço do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereço do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant" className="closed">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereço do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereço do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereço do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant" className="closed">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereço do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereço do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>

        <RestaurantCard to="/restaurant">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span>Endereço do restaurante</span>
          </RestaurantInfo>
        </RestaurantCard>
      </Cards>
    </Container>
  );
};

export default Main;
