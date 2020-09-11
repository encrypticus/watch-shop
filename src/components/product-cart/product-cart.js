import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { CSSTransition } from 'react-transition-group';
import Spinner from '#comps/spinner';
import ShoppingCard from '#comps/shopping-card';
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
      id, index, vendor, price, src, color, material, mechanism, inCart, uniqueId, removeFromCartFetching, visible,
    } = product;

    return (
      <CSSTransition
        key={id}
        in={visible}
        timeout={500}
        classNames="card"
        unmountOnExit
      >
        <ShoppingCard
          key={id}
          id={id}
          index={index}
          vendor={vendor}
          price={price}
          src={src}
          color={color}
          material={material}
          mechanism={mechanism}
          inCart={inCart}
          uniqueId={uniqueId}
          addToCartFetching={removeFromCartFetching}
        />
      </CSSTransition>
    );
  });

  if (getProductCartIsFetching && !hasError) return <div className='product-cart product-cart_empty'><Spinner/></div>;
  if (hasError) return <div className='product-cart'>{message}</div>;

  return (
    !products
      ? <div className='product-cart product-cart_empty'>Корзина пуста</div>
      : <div className='product-cart'>{renderProductCart()}</div>
  );
};

export default ProductCart;
