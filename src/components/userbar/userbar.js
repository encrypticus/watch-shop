import React from 'react';
import { Div, UserbarLink } from './styles';

import SearchIcon from './search-icon';
import HeartIcon from './heart-icon';
import CartIcon from './cart-icon';

const Userbar = () => (
  <Div>
    <UserbarLink href='/'>
      <SearchIcon/>
    </UserbarLink>

    <UserbarLink href='/'>
      <HeartIcon/>
    </UserbarLink>

    <UserbarLink href='/'>
      <CartIcon/>
    </UserbarLink>
  </Div>
);

export default Userbar;
