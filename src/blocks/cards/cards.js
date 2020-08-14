import React from 'react';
import Card from '#comps/card';
import Discount from '#comps/discount';
import './cards.scss';
import { useSelector } from 'react-redux';

const Cards = () => {
  const cards = useSelector(state => state.catalogCardsReducer.cards);

  const cardsList = cards.map((card) => {
    const {
      id,
      vendor,
      price,
      src,
      mechanismChecked,
      vendorChecked,
      materialChecked,
      colorChecked
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
  )
}

export default Cards;
