import React, { useEffect } from 'react';
import Card from '#comps/card';
import Discount from '#comps/discount';
import './cards.scss';
import { useSelector } from 'react-redux';

const Cards = () => {
  const cards = useSelector((state) => state.catalogCardsReducer.cards);
  const minmax = useSelector((state) => state.catalogCardsReducer.price);
  const { min, max } = minmax;

  let cardsList = cards.map((card) => {
    const { price } = card;
    const currentPrice = parseInt(price.replace(/[\D]+/g, ''));

    if (currentPrice >= min && currentPrice <= max) {
      return card;
    }
  });

  cardsList = cardsList.filter((card) => card !== undefined);

  cardsList = cardsList.map((card) => {
    const {
      id,
      vendor,
      price,
      src,
      mechanismChecked,
      vendorChecked,
      materialChecked,
      colorChecked,
    } = card;
    const isFiltered = () => vendorChecked && mechanismChecked && materialChecked && colorChecked;

    if (isFiltered()) {
      return (
        <Card
          key={id}
          vendor={vendor}
          price={`${price} ₽`}
          src={src}
        />
      );
    }
  });

  return (
    <div className='cards'>
      {cardsList}
    </div>
  );
};

export default Cards;
