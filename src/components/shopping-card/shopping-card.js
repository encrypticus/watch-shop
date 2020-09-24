import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import wNumb from 'wnumb';
import './shopping-card.scss';
import AddRemoveProductBtn from '#comps/add-remove-product-btn';
import ProductCounter from '#comps/product-counter';
import {
  colors, materials, mechanisms, cartTypes,
} from '#const';

const ShoppingCard = (props) => {
  const {
    vendor,
    price,
    src,
    color,
    material,
    mechanism,
    id,
    addToCartFetching,
    inCart,
    index,
    uniqueId,
    productType,
  } = props;

  const formatPrice = wNumb({ thousand: ' ' });

  const [currentPrice, setPrice] = useState(price);

  const recalculatePrice = (newPrice) => {
    setPrice(newPrice);
  };

  return (
    <div className='shopping-card'>
      <Link to={`/card/${props.id}`}>
        <img src={src} alt={vendor}/>
      </Link>

      <div className='shopping-card__description'>
        <Link to={`/card/${props.id}`} className='shopping-card__link'>
          <h4 className='shopping-card__vendor'>{vendor}</h4>
        </Link>
        <div>цвет: {colors[color]}</div>
        <div>материал: {materials[material]}</div>
        {mechanisms[mechanism] ? <div>механизм: {mechanisms[mechanism]}</div> : null}
      </div>

      <ProductCounter
        price={price}
        recalculatePrice={recalculatePrice}
        uniqueId={uniqueId}
      />

      <div className='shopping-card__price'>цена: {`${formatPrice.to(currentPrice)} ₽`}</div>

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
    </div>
  );
};

ShoppingCard.propTypes = {
  vendor: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  material: PropTypes.string,
  mechanism: PropTypes.string,
  id: PropTypes.string.isRequired,
  addToCartFetching: PropTypes.bool.isRequired,
  inCart: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  uniqueId: PropTypes.string,
  productType: PropTypes.string.isRequired,
};

export default ShoppingCard;
