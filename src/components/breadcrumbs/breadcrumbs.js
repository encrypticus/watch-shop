import React from 'react';
import './breadcrumbs.scss';
import { NavLink } from 'react-router-dom';

const Breadcrumbs = (props) => (
    <div className='breadcrumbs'>
      <NavLink className='breadcrumbs__link' activeClassName='breadcrumbs__link_active' to='/' exact={true}>
        Главная
      </NavLink>
      <NavLink className='breadcrumbs__link' activeClassName='breadcrumbs__link_active' to='./catalog'>
        Каталог
      </NavLink>
      <NavLink className='breadcrumbs__link' activeClassName='breadcrumbs__link_active' to='./catalog'>
        Мужские часы
      </NavLink>
    </div>
);

export default Breadcrumbs;
