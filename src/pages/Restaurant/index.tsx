/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// import { useRouteMatch } from 'react-router-dom';

import {
  Container,
  Content,
  RestaurantInfoWrapper,
  RestaurantInfo,
  RestaurantSchedule,
  SearchInputWrapper,
  SearchIcon,
  ExpandableTabs,
  Tab,
  ArrowIcon,
  FoodCards,
  Card,
  FoodInfoWrapper,
  FoodInfo,
  Price,
} from './styles';

interface RestaurantParams {
  id: string;
}

const Restaurant: React.FC = () => {
  // const { params } = useRouteMatch<RestaurantParams>();

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
          <Tab className="almoco" isOpen>
            <button type="button">
              Almoço
              <ArrowIcon />
            </button>
            <FoodCards isOpen>
              <Card>
                <img
                  src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg"
                  alt="food"
                />
                <FoodInfoWrapper>
                  <FoodInfo isPromo={false}>
                    <strong>Nome do Prato</strong>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </span>
                  </FoodInfo>

                  <Price isPromo>R$ 19,90</Price>
                </FoodInfoWrapper>
              </Card>

              <Card>
                <img
                  src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg"
                  alt="food"
                />
                <FoodInfoWrapper>
                  <FoodInfo isPromo={false}>
                    <strong>Nome do Prato</strong>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </span>
                  </FoodInfo>

                  <Price>R$ 19,90</Price>
                </FoodInfoWrapper>
              </Card>

              <Card>
                <img
                  src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg"
                  alt="food"
                />
                <FoodInfoWrapper>
                  <FoodInfo isPromo={false}>
                    <strong>Nome do Prato</strong>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </span>
                  </FoodInfo>

                  <Price>R$ 19,90</Price>
                </FoodInfoWrapper>
              </Card>

              <Card>
                <img
                  src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg"
                  alt="food"
                />
                <FoodInfoWrapper>
                  <FoodInfo isPromo className="promotion">
                    <strong>Nome do Prato</strong>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </span>
                  </FoodInfo>

                  <Price isPromo>R$ 19,90</Price>
                </FoodInfoWrapper>
              </Card>
            </FoodCards>
          </Tab>

          <Tab className="bebidas" isOpen>
            <button type="button">
              Bebidas
              <ArrowIcon />
            </button>
          </Tab>

          <Tab className="sobremesa" isOpen>
            <button type="button">
              Sobremesa
              <ArrowIcon />
            </button>
          </Tab>

          <Tab className="acompanhamentos" isOpen>
            <button type="button">
              Acompanhamentos
              <ArrowIcon />
            </button>
          </Tab>
        </ExpandableTabs>
      </Content>
    </Container>
  );
};

export default Restaurant;
