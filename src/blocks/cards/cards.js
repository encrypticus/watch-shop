import React from 'react';
import { useSelector } from 'react-redux';
import Card from '#comps/card';
import './cards.scss';

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

    return false;
  });

  cardsList = cardsList.filter((card) => card);

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

    return '';
  });

  return (
    <div className='cards'>
      {cardsList}
    </div>
  );
};

export default Cards;
