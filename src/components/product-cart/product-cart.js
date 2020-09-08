import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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

  const renderProductCart = () => (
    <TransitionGroup className='product-cart'>
      {
        products.map((product) => {
          const {
            id, index, vendor, price, src, inCart, uniqueId, removeFromCartFetching,
          } = product;

          return (
            <CSSTransition
              timeout={500}
              classNames="card"
            >
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
            </CSSTransition>
          );
        })
      }
    </TransitionGroup>
  );

  if (getProductCartIsFetching && !hasError) return <div className='product-cart product-cart_empty'><Spinner/></div>;
  if (hasError) return <div className='product-cart'>{message}</div>;

  return (
    !products
      ? <div className='product-cart product-cart_empty'>Корзина пуста</div>
      : renderProductCart()
  );
};

export default ProductCart;
