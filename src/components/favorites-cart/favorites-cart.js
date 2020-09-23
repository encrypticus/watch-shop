import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { CSSTransition } from 'react-transition-group';
import FavoritesCard from '#comps/favorites-card';
import { fetchFavoritesCart } from '#act/favorites-cart';
import './favorites-cart.scss';
import Spinner from '#comps/spinner';

const FavoritesCart = () => {
  const {
    getFavoritesCartIsFetching,
    favorites,
    error: { status: hasError, message },
  } = useSelector((state) => state.favoritesCartReducer);
  const { products } = useSelector((state) => state.productCartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesCart());
  }, []);

  useEffect(() => {
    hasError && toast.error(message);
  }, [hasError]);

  const renderFavoritesCart = () => {
    const joinCarts = favorites.map((favorite) => {
      if (products) {
        const matchingInProductCart = products.filter((product) => favorite.id === product.id);

        const isMatchFound = matchingInProductCart.length > 0;

        const product = isMatchFound ? matchingInProductCart[0] : null;

        return {
          ...favorite,
          inCart: product ? product.inCart : false,
          removeFromCartFetching: product ? product.removeFromCartFetching : false,
          uniqueId: product ? product.uniqueId : '',
        };
      }

      return {
        ...favorite,
        inCart: false,
        removeFromCartFetching: false,
        uniqueId: '',
      };
    });

    return joinCarts.map((product) => {
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
        inFavorites,
        uniqueId,
        uniqueFavoritesId,
        addToCartFetching,
        removeFromFavoritesFetching,
        favoritesVisible,
        productType,
      } = product;

      return (
        <CSSTransition
          key={id}
          in={favoritesVisible}
          timeout={500}
          classNames="favorites-card"
          unmountOnExit
        >
          <FavoritesCard
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
            inFavorites={inFavorites}
            uniqueId={uniqueId}
            uniqueFavoritesId={uniqueFavoritesId}
            addToCartFetching={addToCartFetching}
            addToFavoritesFetching={removeFromFavoritesFetching}
            productType={productType}
          />
        </CSSTransition>
      );
    });
  };

  if (getFavoritesCartIsFetching && !hasError) return <div className='favorites-cart'><Spinner/></div>;
  if (hasError) return <div className='favorites-cart favorites-cart_empty'>{message}</div>;

  return (
    !favorites
      ? <div className='favorites-cart favorites-cart_empty'>Корзина пуста</div>
      : <div className='favorites-cart'>{renderFavoritesCart()}</div>
  );
};

export default FavoritesCart;
