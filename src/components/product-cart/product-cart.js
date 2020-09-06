import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Spinner from '#comps/spinner';
import { fetchProductCart } from '#act/product-cart';
import './product-cart.scss';

const ProductCart = () => {
  const { getProductCartIsFetching, products, error: { status: hasError, message } } = useSelector((state) => state.productCartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductCart());
  }, []);

  useEffect(() => {
    hasError && toast.error(message);
  }, [hasError]);

  if (getProductCartIsFetching && !hasError) return <Spinner/>;
  if (hasError) return <div>{message}</div>;

  return (
    <div className='product-cart'>
      {!products ? 'Корзина пуста' : <div>products</div>}
    </div>
  );
};

export default ProductCart;
