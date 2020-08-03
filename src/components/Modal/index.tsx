import React, { useState, useCallback } from 'react';

import { FiMinus, FiPlus, FiX } from 'react-icons/fi';
import {
  Container,
  Background,
  CloseButton,
  ImgHolder,
  PlateInfoWrapper,
  PlateDescription,
  Footer,
  AddRemoveButton,
  AddButton,
} from './styles';

interface Props {
  isModalOpen: boolean;
  handleModalClose(): void;
  image: string;
  plateName: string;
  plateDescription: string;
  platePrice: string;
}

const Modal: React.FC<Props> = ({
  isModalOpen,
  handleModalClose,
  image,
  plateName,
  plateDescription,
  platePrice,
}: Props) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity]);

  const handleSubtract = useCallback(() => {
    if (quantity <= 1) {
      return;
    }

    setQuantity(quantity - 1);
  }, [quantity]);

  return (
    <>
      {isModalOpen && (
        <>
          <Background onClick={handleModalClose} />
          <Container>
            <CloseButton onClick={handleModalClose}>
              <FiX size={24} />
            </CloseButton>

            <ImgHolder>
              <img src={image} alt={plateName} />
            </ImgHolder>

            <PlateInfoWrapper>
              <PlateDescription>
                <h1>{plateName}</h1>
                <p>{plateDescription}</p>
              </PlateDescription>
              <span>{platePrice}</span>
            </PlateInfoWrapper>

            <Footer>
              <AddRemoveButton>
                <FiMinus size={20} cursor="pointer" onClick={handleSubtract} />
                <span>{quantity}</span>
                <FiPlus size={20} cursor="pointer" onClick={handleAdd} />
              </AddRemoveButton>

              <AddButton onClick={handleModalClose}>
                <h1>Adicionar</h1>
                <span>{platePrice}</span>
              </AddButton>
            </Footer>
          </Container>
        </>
      )}
    </>
  );
};

export default Modal;
