import React, { useContext } from 'react';

import './product-cart.scss';
import WatchesServiceProvider from '#context/context';

const ProductCart = () => {
  const watchesService = useContext(WatchesServiceProvider);

  return (
    <div className='product-cart'>ProductCart</div>
  );
};

export default ProductCart;
