import React, { useContext, useEffect } from 'react';

import './product-cart.scss';
import WatchesServiceProvider from '#context/context';

const ProductCart = () => {
  const watchesService = useContext(WatchesServiceProvider);

  useEffect(() => {
    try {
      watchesService.getProductCartFromDB()
        .then((products) => console.log(products));
    } catch (e) {
      alert(e.message);
    }
  }, []);

  return (
    <div className='product-cart'>ProductCart</div>
  );
};

export default ProductCart;
