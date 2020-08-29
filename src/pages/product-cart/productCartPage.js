import React from 'react';
import Header from '#comps/header';
import Breadcrumbs from '#comps/breadcrumbs';

const ProductCartPage = () => (
  <>
    <div className='container'>
      <Header/>
      <div className='breadcrumbs-wrapper'>
        <Breadcrumbs/>
      </div>
      <div className='product-cart-page'>
        Корзина товаров
      </div>
    </div>
  </>
);

export default ProductCartPage;
