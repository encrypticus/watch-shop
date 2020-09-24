import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.scss';
import AddRemoveProductBtn from '#comps/add-remove-product-btn';
import { cartTypes } from '#const';

const Card = (props) => {
  const {
    vendor,
    price,
    src, color,
    material,
    mechanism,
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
    <div className='card'>
      <div className='card__header'>
        <h4 className='card__vendor'>
          <Link to={`/card/${props.id}`} className='card__link'>
            {props.vendor}
          </Link>
        </h4>
        <div className='card__buttons'>
          <AddRemoveProductBtn
            vendor={vendor}
            price={price}
            src={src}
            color={color}
            material={material}
            mechanism={mechanism}
            id={id}
            index={index}
            addToCartFetching={addToCartFetching}
            addToFavoritesFetching={addToFavoritesFetching}
            inCart={inCart}
            inFavorites={inFavorites}
            uniqueId={uniqueId}
            uniqueFavoritesId={uniqueFavoritesId}
            productType={productType}
            cartType={cartTypes.favorites}
          />
          <AddRemoveProductBtn
            vendor={vendor}
            price={price}
            src={src}
            color={color}
            material={material}
            mechanism={mechanism}
            id={id}
            index={index}
            addToCartFetching={addToCartFetching}
            addToFavoritesFetching={addToFavoritesFetching}
            inCart={inCart}
            inFavorites={inFavorites}
            uniqueId={uniqueId}
            uniqueFavoritesId={uniqueFavoritesId}
            productType={productType}
            cartType={cartTypes.product}
          />
        </div>
      </div>
      <p className='card__price'>{`${props.price} ₽`}</p>
      <div className='card__body'>
        <Link to={`/card/${props.id}`} className='card__link'>
          <img className='card__image' src={props.src} alt={props.vendor}/>
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  vendor: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
  mechanism: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  addToCartFetching: PropTypes.bool.isRequired,
  addToFavoritesFetching: PropTypes.bool.isRequired,
  inCart: PropTypes.bool.isRequired,
  inFavorites: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  uniqueId: PropTypes.string,
  uniqueFavoritesId: PropTypes.string,
  productType: PropTypes.string.isRequired,
};

export default Card;
