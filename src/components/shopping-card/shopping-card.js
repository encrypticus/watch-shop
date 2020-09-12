import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './shopping-card.scss';
import AddRemoveProductBtn from '#comps/add-remove-product-btn';
import { colors, materials, mechanisms } from '#const';

const ShoppingCard = (props) => {
  const {
    vendor, price, src, color, material, mechanism, id, addToCartFetching, inCart, index, uniqueId,
  } = props;

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
        <div>механизм: {mechanisms[mechanism]}</div>
      </div>

      <div className='shopping-card__price'>цена: {`${price} ₽`}</div>

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
      />
    </div>
  );
};

ShoppingCard.propTypes = {
  vendor: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
  mechanism: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  addToCartFetching: PropTypes.bool.isRequired,
  inCart: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  uniqueId: PropTypes.string,
};

export default ShoppingCard;
