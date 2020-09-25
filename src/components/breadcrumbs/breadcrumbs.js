import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import './breadcrumbs.scss';

const Breadcrumbs = () => {
  const { isUserSignedIn } = useSelector((state) => state.authReducer);
  const { pathname } = useLocation();

  const productCart = (
    <NavLink className='breadcrumbs__link' activeClassName='breadcrumbs__link_active' to='/product-cart'>
      Корзина
    </NavLink>
  );

  const favoritesCart = (
    < NavLink className='breadcrumbs__link' activeClassName='breadcrumbs__link_active' to='/favorites-cart'>
      Избранное
    </NavLink>
  );

  const card = (
    < NavLink className='breadcrumbs__link' activeClassName='breadcrumbs__link_active' to='/'>
      Товар
    </NavLink>
  );

  const cart = pathname === '/product-cart'
    ? productCart
    : pathname === '/favorites-cart'
      ? favoritesCart : null;

  const reg = /card/;

  return (
    <div className='breadcrumbs'>
      <NavLink className='breadcrumbs__link' activeClassName='breadcrumbs__link_active' to='/' exact={true}>
        Главная
      </NavLink>
      <NavLink className='breadcrumbs__link' activeClassName='breadcrumbs__link_active' to='/catalog'>
        Каталог
      </NavLink>
      {reg.test(pathname) && card}
      {isUserSignedIn && cart}
    </div>
  );
};

export default Breadcrumbs;
