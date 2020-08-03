import React from 'react';
import './header-nav.scss';
import { Link, NavLink } from 'react-router-dom';

const HeaderNav = (props) => {
  return (
    <ul className='header-nav'>
      <li className='header-nav__item'>
        <NavLink to='/catalog' className='header-nav__link' activeClassName='header-nav__link_active'>Каталог</NavLink>
      </li>
      <li className='header-nav__item'>
        <NavLink exact to='/' className='header-nav__link' activeClassName='header-nav__link_active'>Акции</NavLink>
      </li>
      <li className='header-nav__item'>
        <NavLink exact to='/' className='header-nav__link' activeClassName='header-nav__link_active'>Доставка</NavLink>
      </li>
      <li className='header-nav__item'>
        <NavLink exact to='/' className='header-nav__link' activeClassName='header-nav__link_active'>Контакты</NavLink>
      </li>
    </ul>
  );
};

export default HeaderNav;