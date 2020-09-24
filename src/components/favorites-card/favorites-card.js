import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './favorites-card.scss';
import AddRemoveProductBtn from '#comps/add-remove-product-btn';
import {
  colors, materials, mechanisms, cartTypes,
} from '#const';

const FavoritesCard = (props) => {
  const {
    vendor,
    price,
    src,
    color,
    material,
    mechanism,
    id,
    addToCartFetching,
    addToFavoritesFetching,
    inCart,
    inFavorites,
    index,
    uniqueId,
    uniqueFavoritesId,
    productType,
  } = props;

  return (
    <div className='favorites-card'>
      <Link to={`/card/${props.id}`}>
        <img src={src} alt={vendor}/>
      </Link>

      <div className='favorites-card__description'>
        <Link to={`/card/${id}`} className='favorites-card__link'>
          <h4 className='favorites-card__vendor'>{vendor}</h4>
        </Link>
        <div>цвет: {colors[color]}</div>
        <div>материал: {materials[material]}</div>
        {mechanisms[mechanism] ? <div>механизм: {mechanisms[mechanism]}</div> : null}
      </div>

      <div className='favorites-card__price'>цена: {`${price} ₽`}</div>

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
        inCart={inCart}
        uniqueId={uniqueId}
        productType={productType}
        cartType={cartTypes.product}
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
        addToFavoritesFetching={addToFavoritesFetching}
        inFavorites={inFavorites}
        uniqueFavoritesId={uniqueFavoritesId}
        productType={productType}
        cartType={cartTypes.favorites}
      />
    </div>
  );
};

FavoritesCard.propTypes = {
  vendor: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  color: PropTypes.string,
  material: PropTypes.string,
  mechanism: PropTypes.string,
  id: PropTypes.string.isRequired,
  addToCartFetching: PropTypes.bool,
  addToFavoritesFetching: PropTypes.bool.isRequired,
  inCart: PropTypes.bool.isRequired,
  inFavorites: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  uniqueId: PropTypes.string.isRequired,
  uniqueFavoritesId: PropTypes.string.isRequired,
  productType: PropTypes.string.isRequired,
};

export default FavoritesCard;
