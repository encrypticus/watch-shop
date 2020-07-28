import React from 'react';
import { Div }  from './styles';
import { UserbarLink } from './styles';
import SearchIcon from './search-icon';
import HeartIcon from './heart-icon';
import CartIcon from './cart-icon';

const Userbar = (props) => {

  return (
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
};

export default Userbar;
