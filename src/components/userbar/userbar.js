import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Wobble from 'react-reveal/Wobble';
import './userbar.scss';
import HeartIcon from './heart-icon';
import CartIcon from './cart-icon';
import User from '#comps/user';

const Userbar = () => {
  const { isUserSignedIn } = useSelector((state) => state.authReducer);
  const { animateUserBar } = useSelector((state) => state.animationReducer);

  const carts = (
    <Wobble when={animateUserBar}>
      <Link to='/bookmarks' title='перейти в избранное' className='userbar__link'>
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
