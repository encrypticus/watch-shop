import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { CSSTransition } from 'react-transition-group';
import wNumb from 'wnumb';
import Spinner from '#comps/spinner';
import ShoppingCard from '#comps/shopping-card';
import { fetchProductCart } from '#act/product-cart';
import './product-cart.scss';

const ProductCart = () => {
  const {
    getProductCartIsFetching,
    products,
    error: { status: hasError, message },
    totalAmount,
  } = useSelector((state) => state.productCartReducer);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const totalFormat = wNumb({ thousand: ' ' });

  useEffect(() => {
    dispatch(fetchProductCart());
  }, []);

  useEffect(() => {
    hasError && toast.error(message);
  }, [hasError]);

  useEffect(() => {
    const totalSum = Object.keys(totalAmount)
      .map((price) => totalAmount[price])
      .reduce((acc, value) => acc + value, 0);

    setTotal(totalSum);
  }, [totalAmount]);

  const checkout = () => {
    toast.dark('Заказ оформлен');
  };

  const renderShoppingCards = () => products.map((product) => {
    const {
      id,
      index,
      vendor,
      price,
      src,
      color,
      material,
      mechanism,
      inCart,
      uniqueId,
      removeFromCartFetching,
      visible,
      productType,
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
          productType={productType}
        />
      </CSSTransition>
    );
  });

  const renderProductCart = () => (
    <>
      <div className='product-cart__total-amount-block'>
        <p className='product-cart__total-amount'>Итого: {`${totalFormat.to(total)} ₽`}</p>
        <button className='product-cart__button' type='button' onClick={checkout}>Оформить заказ</button>
      </div>
      {renderShoppingCards()}
    </>
  );

  if (getProductCartIsFetching && !hasError) return <div className='product-cart product-cart_empty'><Spinner/></div>;
  if (hasError) return <div className='product-cart'>{message}</div>;

  return (
    !products
      ? <div className='product-cart product-cart_empty'>Корзина пуста</div>
      : <div className='product-cart'>{renderProductCart()}</div>
  );
};

export default ProductCart;
