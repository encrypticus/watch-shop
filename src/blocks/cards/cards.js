import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductCatalogFromDB, productCatalogRequestFetching } from '#act/catalog-cards';
import Card from '#comps/card';
import Spinner from '#comps/spinner';
import './cards.scss';

const Cards = () => {
  const {
    cards,
    getProductCatalogIsFetching,
    price: { min, max },
    error: { status: hasError, message },
  } = useSelector((state) => state.catalogCardsReducer);
  const { isUserSignedIn } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(isUserSignedIn);
  //   isUserSignedIn && dispatch(getProductCatalogFromDB());
  // }, []);

  let cardsList = cards.map((card) => {
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
      uniqueId,
      addToCartFetching,
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
          id={id}
          index={index}
          vendor={vendor}
          price={`${price} ₽`}
          src={src}
          addToCartFetching={addToCartFetching}
          inCart={inCart}
          uniqueId={uniqueId}
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
