import React from 'react';
import Header from '#comps/header';
import Breadcrumbs from '#comps/breadcrumbs';
import ProductCart from '#comps/product-cart';

const ProductCartPage = () => (
  <>
    <div className='container'>
      <Header/>
      <div className='breadcrumbs-wrapper'>
        <Breadcrumbs/>
      </div>
      <div className='product-cart-page'>
        <ProductCart/>
      </div>
    </div>
  </>
);

export default ProductCartPage;
