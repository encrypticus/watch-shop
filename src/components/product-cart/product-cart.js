import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Spinner from '#comps/spinner';
import { fetchProductCart } from '#act/product-cart';
import './product-cart.scss';

const ProductCart = () => {
  const { isFetching, products, error: { status: hasError, message } } = useSelector((state) => state.productCartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductCart());
  }, []);

  useEffect(() => {
    hasError && toast.error(message);
  }, [hasError]);

  if (isFetching && !hasError) return <Spinner/>;
  if (hasError) return <div>{message}</div>;

  return (
    <div className='product-cart'>
      {!products ? 'Корзина пуста' : products}
    </div>
  );
};

export default ProductCart;
