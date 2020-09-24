import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Wobble from 'react-reveal/Wobble';
import './userbar.scss';
import HeartIcon from './heart-icon';
import CartIcon from './cart-icon';
import User from '#comps/user';
import { fetchProductCart } from '#act/product-cart';
import { fetchFavoritesCart } from '#act/favorites-cart';

const Userbar = () => {
  const { isUserSignedIn } = useSelector((state) => state.authReducer);
  const { animateUserBar } = useSelector((state) => state.animationReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductCart());
    dispatch(fetchFavoritesCart());
  }, []);

  const carts = (
    <Wobble when={animateUserBar}>
      <Link to='/favorites-cart' title='перейти в избранное' className='userbar__link'>
        <HeartIcon/>
      </Link>

      <Link to='/product-cart' title='перейти в корзину' className='userbar__link'>
        <CartIcon/>
      </Link>
    </Wobble>
  );

  return (
    <div className='userbar'>
      <User/>
      {isUserSignedIn && carts}
    </div>
  );
};

export default Userbar;
