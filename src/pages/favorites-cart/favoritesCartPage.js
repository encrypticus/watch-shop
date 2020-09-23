import React from 'react';
import Header from '#comps/header';
import Breadcrumbs from '#comps/breadcrumbs';
import FavoritesCart from '#comps/favorites-cart';

const FavoritesCartPage = () => (
  <>
    <div className='container'>
      <Header/>
      <div className='breadcrumbs-wrapper'>
        <Breadcrumbs/>
      </div>
      <div className='favorites-cart-page'>
        <FavoritesCart/>
      </div>
    </div>
  </>
);

export default FavoritesCartPage;
