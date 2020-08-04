import React, { useState, useCallback } from 'react';

import { FiChevronRight } from 'react-icons/fi';
import Item from '../Item';
import FoodImg from '../../assets/foodImage.jpg';

import { Tabs, ArrowIcon, FoodCards } from './styles';

interface Props {
  name: string;
}

const Tab: React.FC<Props> = ({ name }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleExpand = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  return (
    <Tabs>
      <button type="button" onClick={handleExpand}>
        {name}
        {isOpen ? <ArrowIcon /> : <FiChevronRight size={16} />}
      </button>
      {isOpen && (
        <FoodCards>
          <Item
            image={FoodImg}
            name="Nome do Prato"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor indicididunt ut labore et dolore magna aliqua."
            price="R$ 19,90"
          />
          <Item
            image={FoodImg}
            name="Nome do Prato"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            price="R$ 19,90"
            isPromo
          />
          <Item
            image={FoodImg}
            name="Nome do Prato"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            price="R$ 19,90"
            isPromo
          />
          <Item
            image={FoodImg}
            name="Nome do Prato"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            price="R$ 19,90"
          />
        </FoodCards>
      )}
    </Tabs>
  );
};

export default Tab;
