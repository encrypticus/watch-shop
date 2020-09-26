import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './strap-card.scss';
import AddRemoveProductBtn from '#comps/add-remove-product-btn';
import { cartTypes } from '#const';

const StrapCard = (props) => {
  const {
    vendor,
    price,
    src,
    material,
    color,
    id,
    addToCartFetching,
    inCart,
    addToFavoritesFetching,
    inFavorites,
    index,
    uniqueId,
    uniqueFavoritesId,
    productType,
  } = props;
  return (
    <div className='band-card'>
      <div className='band-card__header'>
        <h4 className='band-card__vendor'>
          <Link
            to={{
              pathname: `/card/${props.id}`,
              search: `?productType=${productType}&index=${index}`,
            }}
            className='card__link'
          >
            {props.vendor}
          </Link>
        </h4>
        <div className='band-card__buttons'>
          <AddRemoveProductBtn
            vendor={vendor}
            price={price}
            src={src}
            material={material}
            color={color}
            id={id}
            index={index}
            addToCartFetching={addToCartFetching}
            inCart={inCart}
            uniqueId={uniqueId}
            uniqueFavoritesId={uniqueFavoritesId}
            productType={productType}
            addToFavoritesFetching={addToFavoritesFetching}
            inFavorites={inFavorites}
            cartType={cartTypes.favorites}
          />
          <AddRemoveProductBtn
            vendor={vendor}
            price={price}
            src={src}
            material={material}
            color={color}
            id={id}
            index={index}
            addToCartFetching={addToCartFetching}
            inCart={inCart}
            uniqueId={uniqueId}
            uniqueFavoritesId={uniqueFavoritesId}
            productType={productType}
            addToFavoritesFetching={addToFavoritesFetching}
            inFavorites={inFavorites}
            cartType={cartTypes.product}
          />
        </div>
      </div>
      <p className='band-card__price'>{`${props.price} ₽`}</p>
      <div className='band-card__body'>
        <Link
          to={{
            pathname: `/card/${props.id}`,
            search: `?productType=${productType}&index=${index}`,
          }}
          className='card__link'
        >
          <img className='band-card__image' src={props.src} alt={props.vendor}/>
        </Link>
      </div>
    </div>
  );
};

StrapCard.propTypes = {
  vendor: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  uniqueId: PropTypes.string.isRequired,
  uniqueFavoritesId: PropTypes.string.isRequired,
  addToCartFetching: PropTypes.bool.isRequired,
  addToFavoritesFetching: PropTypes.bool.isRequired,
  inCart: PropTypes.bool.isRequired,
  inFavorites: PropTypes.bool.isRequired,
  productType: PropTypes.string.isRequired,
};

export default StrapCard;
