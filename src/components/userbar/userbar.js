import React from 'react';
import './userbar.scss';
import HeartIcon from './heart-icon';
import CartIcon from './cart-icon';
import User from '#comps/user';

const Userbar = () => (
  <div className='userbar'>
    <User/>

    <a href='/'>
      <HeartIcon/>
    </a>

    <a href='/'>
      <CartIcon/>
    </a>
  </div>
);

export default Userbar;
