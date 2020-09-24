import React from 'react';
import { useSelector } from 'react-redux';
import Card from '#comps/card';
import Spinner from '#comps/spinner';
import './cards.scss';
import { endpoints } from '#const';

const Cards = () => {
  const {
    watchCards,
    getProductCatalogIsFetching,
    price: { min, max },
    error: { status: hasError },
  } = useSelector((state) => state.catalogCardsReducer);
  const { isUserSignedIn } = useSelector((state) => state.authReducer);

  let cardsList = watchCards.map((card) => {
    const { price } = card;
    const currentPrice = parseInt(price.replace(/[\D]+/g, ''));

    if (currentPrice >= min && currentPrice <= max) {
      return card;
    }

    return false;
  });

  cardsList = cardsList.filter((card) => card);

  cardsList = cardsList.map((card, index) => {
    const {
      id,
      vendor,
      price,
      src,
      inCart,
      inFavorites,
      uniqueId,
      uniqueFavoritesId,
      addToCartFetching,
      addToFavoritesFetching,
      mechanismChecked,
      vendorChecked,
      materialChecked,
      colorChecked,
      color,
      material,
      mechanism,
    } = card;

    const isFiltered = () => vendorChecked && mechanismChecked && materialChecked && colorChecked;

    if (isFiltered()) {
      return (
        <Card
          key={id}
          id={id}
          index={index}
          vendor={vendor}
          price={price}
          src={src}
          color={color}
          material={material}
          mechanism={mechanism}
          addToCartFetching={addToCartFetching}
          addToFavoritesFetching={addToFavoritesFetching}
          inCart={inCart}
          inFavorites={inFavorites}
          uniqueId={uniqueId}
          uniqueFavoritesId={uniqueFavoritesId}
          productType={endpoints.watchCatalog}
        />
      );
    }

    return '';
  });

  if (getProductCatalogIsFetching && !hasError && isUserSignedIn) return <Spinner/>;

  return (
    <div className='cards'>
      {cardsList}
    </div>
  );
};

export default Cards;
