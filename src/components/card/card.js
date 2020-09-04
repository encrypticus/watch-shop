import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addProductToCartRequest } from '#act/product-cart';
import './card.scss';

const Card = (props) => {
  const dispatch = useDispatch();
  const { isUserSignedIn } = useSelector((state) => state.authReducer);
  const { vendor, price, src } = props;

  const addProductToCart = () => {
    if (!isUserSignedIn) {
      toast.warn('Для добавления товара в корзину необходима авторизация');
      return;
    }

    dispatch(addProductToCartRequest({ vendor, price, src }));
  };

  return (
    <div className='card'>
      <div className='card__header'>
        <h4 className='card__vendor'>
          <Link to={`/card/${props.id}`} className='card__link'>
            {props.vendor}
          </Link>
        </h4>
        <div className='card__buttons'>
          <button>
            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.9686 5.77104C19.6912 3.00625 17.5306 1.00033 14.8266 1.00033C13.0251 1.00033 11.3757 1.87835 10.4475 3.28557C9.5278 1.86015 7.94595 1 6.17336 1C3.4697 1 1.30868 3.00592 1.0317 5.77071C1.00978 5.89283 0.919889 6.53555 1.19321 7.58368C1.58712 9.09548 2.49699 10.4706 3.82378 11.5594L10.4431 17L17.1761 11.5598C18.5029 10.4706 19.4128 9.09581 19.8067 7.58368C20.08 6.53588 19.9902 5.89316 19.9686 5.77104ZM19.0953 7.4321C18.7357 8.81284 17.9022 10.0708 16.6872 11.0676L10.4475 16.1097L4.31489 11.069C3.09772 10.0701 2.26459 8.81251 1.90466 7.43177C1.64595 6.4399 1.75229 5.87959 1.75265 5.87595L1.75813 5.84253C1.99565 3.42027 3.85229 1.66191 6.17336 1.66191C7.88602 1.66191 9.39369 2.61506 10.1092 4.14903L10.4457 4.87151L10.7822 4.14903C11.4864 2.63856 13.0737 1.66224 14.8269 1.66224C17.1476 1.66224 19.0047 3.4206 19.2469 5.8743C19.2476 5.87959 19.354 6.44023 19.0953 7.4321Z"
                fill="#1B1A17" stroke="#1B1A17" strokeWidth="0.75"></path>
            </svg>
          </button>
          <button onClick={addProductToCart}>
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.8961 3.05165C17.7931 2.91217 17.6273 2.82596 17.4472 2.8187L6.28154 2.36414C5.96118 2.3509 5.69347 2.58449 5.67977 2.88566C5.66616 3.1867 5.91308 3.44107 6.23192 3.45401L16.6416 3.87783L14.5949 9.90922H5.4865L3.84094 1.44688C3.80476 1.26141 3.66994 1.10668 3.484 1.03778L0.788849 0.0377747C0.491809 -0.0720606 0.156622 0.0657377 0.0399656 0.345938C-0.0764898 0.62629 0.0693715 0.943051 0.36625 1.05323L2.76267 1.94237L4.43727 10.5532C4.48775 10.8121 4.72662 11.0001 5.00541 11.0001H5.2832L4.64887 12.6642C4.59578 12.8036 4.61766 12.9584 4.70801 13.0795C4.79824 13.2006 4.94499 13.2727 5.10164 13.2727H5.54656C5.27087 13.5625 5.10164 13.944 5.10164 14.3636C5.10164 15.266 5.87905 16 6.83425 16C7.78946 16 8.56686 15.266 8.56686 14.3636C8.56686 13.9441 8.39764 13.5625 8.12199 13.2727H11.8995C11.6237 13.5625 11.4545 13.944 11.4545 14.3636C11.4545 15.266 12.2317 16 13.1871 16C14.1426 16 14.9197 15.266 14.9197 14.3636C14.9197 13.9441 14.7506 13.5625 14.4749 13.2727H15.016C15.2819 13.2727 15.4973 13.0692 15.4973 12.8182C15.4973 12.5671 15.2818 12.3636 15.016 12.3636H5.78644L6.30616 11H15.016C15.2671 11 15.4894 10.8467 15.5659 10.621L17.9723 3.52998C18.0275 3.36814 17.9992 3.19119 17.8961 3.05165ZM6.83429 15.0911C6.4096 15.0911 6.06422 14.7649 6.06422 14.3638C6.06422 13.9627 6.4096 13.6365 6.83429 13.6365C7.25899 13.6365 7.60433 13.9627 7.60433 14.3638C7.60433 14.7649 7.25899 15.0911 6.83429 15.0911ZM13.1871 15.0911C12.7624 15.0911 12.4171 14.7649 12.4171 14.3638C12.4171 13.9627 12.7624 13.6365 13.1871 13.6365C13.6118 13.6365 13.9572 13.9627 13.9572 14.3638C13.9572 14.7649 13.6118 15.0911 13.1871 15.0911Z"
                fill="#1B1A17"></path>
            </svg>
          </button>
        </div>
      </div>
      <p className='card__price'>{props.price}</p>
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
  id: PropTypes.string.isRequired,
};

export default Card;
