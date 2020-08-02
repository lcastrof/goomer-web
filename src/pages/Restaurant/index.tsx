/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import Tab from '../../components/Tab';

import {
  Container,
  Content,
  RestaurantInfoWrapper,
  RestaurantInfo,
  RestaurantSchedule,
  SearchInputWrapper,
  SearchIcon,
  ExpandableTabs,
  Banner,
} from './styles';

const Restaurant: React.FC = () => {
  return (
    <Container>
      <Content>
        <RestaurantInfoWrapper>
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
            alt="restaurant image"
          />
          <RestaurantInfo>
            <strong>Nome do Restaurante</strong>
            <span className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              corrupti dolor impedit, distinctio
            </span>
            <RestaurantSchedule>
              <span className="schedule">
                Segunda à Sexta:
                <strong> 11:30 às 15:00</strong>
              </span>
              <span className="schedule">
                Sábados:
                <strong> 11:30 às 22:00</strong>
              </span>
              <span className="schedule">
                Domingos e Feriados:
                <strong> 11:30 às 15:00</strong>
              </span>
            </RestaurantSchedule>
          </RestaurantInfo>
        </RestaurantInfoWrapper>

        <SearchInputWrapper>
          <button type="button">Buscar no cardápio</button>
          <input type="text" />
          <SearchIcon />
        </SearchInputWrapper>

        <ExpandableTabs>
          <Tab name="Almoço" />
          <Tab name="Bebidas" />
          <Tab name="Sobremesas" />
          <Tab name="Acompanhamentos" />
        </ExpandableTabs>
      </Content>

      <Banner />
    </Container>
  );
};

export default Restaurant;
