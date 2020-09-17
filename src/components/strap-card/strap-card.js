import React from 'react';
import PropTypes from 'prop-types';
import './strap-card.scss';
import AddRemoveProductBtn from '#comps/add-remove-product-btn';

const StrapCard = (props) => {
  const {
    vendor, price, src, color, id, addToCartFetching, inCart, index, uniqueId, productType,
  } = props;
  return (
      <div className='band-card'>
        <div className='band-card__header'>
          <h4 className='band-card__vendor'>{props.vendor}</h4>
          <div className='band-card__buttons'>
            <button>
              <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.9686 5.77104C19.6912 3.00625 17.5306 1.00033 14.8266 1.00033C13.0251 1.00033 11.3757 1.87835 10.4475 3.28557C9.5278 1.86015 7.94595 1 6.17336 1C3.4697 1 1.30868 3.00592 1.0317 5.77071C1.00978 5.89283 0.919889 6.53555 1.19321 7.58368C1.58712 9.09548 2.49699 10.4706 3.82378 11.5594L10.4431 17L17.1761 11.5598C18.5029 10.4706 19.4128 9.09581 19.8067 7.58368C20.08 6.53588 19.9902 5.89316 19.9686 5.77104ZM19.0953 7.4321C18.7357 8.81284 17.9022 10.0708 16.6872 11.0676L10.4475 16.1097L4.31489 11.069C3.09772 10.0701 2.26459 8.81251 1.90466 7.43177C1.64595 6.4399 1.75229 5.87959 1.75265 5.87595L1.75813 5.84253C1.99565 3.42027 3.85229 1.66191 6.17336 1.66191C7.88602 1.66191 9.39369 2.61506 10.1092 4.14903L10.4457 4.87151L10.7822 4.14903C11.4864 2.63856 13.0737 1.66224 14.8269 1.66224C17.1476 1.66224 19.0047 3.4206 19.2469 5.8743C19.2476 5.87959 19.354 6.44023 19.0953 7.4321Z"
                  fill="#1B1A17" stroke="#1B1A17" strokeWidth="0.75"></path>
              </svg>
            </button>
            <AddRemoveProductBtn
              vendor={vendor}
              price={price}
              src={src}
              color={color}
              id={id}
              index={index}
              addToCartFetching={addToCartFetching}
              inCart={inCart}
              uniqueId={uniqueId}
              productType={productType}
            />
          </div>
        </div>
        <p className='band-card__price'>{props.price}</p>
        <div className='band-card__body'>
          <img className='band-card__image' src={props.src} alt={props.vendor}/>
        </div>
      </div>
  );
};

StrapCard.propTypes = {
  vendor: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  uniqueId: PropTypes.string.isRequired,
  addToCartFetching: PropTypes.bool.isRequired,
  inCart: PropTypes.bool.isRequired,
  productType: PropTypes.string.isRequired,
};

export default StrapCard;