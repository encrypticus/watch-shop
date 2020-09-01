import React, { useContext, useEffect } from 'react';

import './product-cart.scss';
import WatchesServiceProvider from '#context/context';

const ProductCart = () => {
  const watchesService = useContext(WatchesServiceProvider);

  useEffect(() => {
    watchesService.getProductCartFromDB()
      .then((products) => {
        products ? console.log('Корзина успешно получена', products) : alert('Корзина пуста');
        return products;
      })
      .catch((error) => {
        error.message === 'Failed to fetch' ? alert('Невозможно получить данные, проверьте сетевое соединение') : console.log(error);
      });
  }, []);

  return (
    <div className='product-cart'>ProductCart</div>
  );
};

export default ProductCart;
