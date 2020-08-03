import React, { useCallback, useState } from 'react';

import Modal from '../Modal';

import { Card, FoodInfoWrapper, FoodInfo, Price } from './styles';

interface Props {
  image: string;
  name: string;
  description: string;
  price: string;
  // eslint-disable-next-line react/require-default-props
  isPromo?: boolean;
}

const Item: React.FC<Props> = ({
  image,
  name,
  description,
  price,
  isPromo = false,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <Modal
        isModalOpen={isModalOpen}
        handleModalClose={handleModalClose}
        image={image}
        plateName={name}
        plateDescription={description}
        platePrice={price}
      />

      <Card onClick={handleModalOpen}>
        <img src={image} alt={name} />
        <FoodInfoWrapper>
          <FoodInfo isPromo={isPromo}>
            <strong>{name}</strong>
            <span>{description}</span>
          </FoodInfo>

          <Price isPromo={isPromo}>{price}</Price>
        </FoodInfoWrapper>
      </Card>
    </>
  );
};

export default Item;
