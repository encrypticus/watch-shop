import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Spinner from '#comps/spinner';
import Card from '#comps/card';
import { fetchProductCart } from '#act/product-cart';
import './product-cart.scss';

const ProductCart = () => {
  const {
    getProductCartIsFetching, products, error: { status: hasError, message },
  } = useSelector((state) => state.productCartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductCart());
  }, []);

  useEffect(() => {
    hasError && toast.error(message);
  }, [hasError]);

  const renderProductCart = () => products.map((product) => {
    const {
      id, index, vendor, price, src, inCart, uniqueId, removeFromCartFetching,
    } = product;

    return (
        <Card
          key={id}
          id={id}
          index={index}
          vendor={vendor}
          price={price}
          src={src}
          inCart={inCart}
          uniqueId={uniqueId}
          addToCartFetching={removeFromCartFetching}
        />
    );
  });

  if (getProductCartIsFetching && !hasError) return <div className='product-cart'><Spinner/></div>;
  if (hasError) return <div>{message}</div>;

  return (
    <div className='product-cart'>
      {!products ? 'Корзина пуста' : renderProductCart()}
    </div>
  );
};

export default ProductCart;
