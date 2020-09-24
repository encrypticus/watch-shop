import React from 'react';
import { useSelector } from 'react-redux';
import StrapCard from '#comps/strap-card';
import './strap-cards.scss';
import { endpoints } from '#const';

const StrapCards = () => {
  const { strapCards } = useSelector((state) => state.catalogCardsReducer);

  const strapCardList = strapCards.map((strapCard, index) => {
    const {
      id,
      vendor,
      price,
      src,
      color,
      inCart,
      inFavorites,
      uniqueId,
      uniqueFavoritesId,
      addToCartFetching,
      addToFavoritesFetching,
    } = strapCard;

    return (
      <StrapCard
        key={id}
        id={id}
        index={index}
        vendor={vendor}
        price={price}
        src={src}
        color={color}
        inCart={inCart}
        inFavorites={inFavorites}
        addToCartFetching={addToCartFetching}
        addToFavoritesFetching={addToFavoritesFetching}
        uniqueId={uniqueId}
        uniqueFavoritesId={uniqueFavoritesId}
        productType={endpoints.strapCatalog}
      />
    );
  });

  return (
    <>
      {strapCardList}
    </>
  );
};

export default StrapCards;
