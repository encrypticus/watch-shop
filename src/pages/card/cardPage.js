import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addProductToCartRequest } from '#act/product-cart';
import Page404 from '#pages/404';
import './card-page.scss';
import Header from '#comps/header';
import Breadcrumbs from '#comps/breadcrumbs';
import CardCarousel, { CardCarouselPreview } from '#comps/card-carousel';
import AddRemoveProductBtn from '#comps/add-remove-product-btn';
import { cartTypes } from '#const';

const CardPage = () => {
  const { id } = useParams();
  const watches = useSelector((state) => state.catalogCardsReducer.watchCards);
  const straps = useSelector((state) => state.catalogCardsReducer.strapCards);
  const { isUserSignedIn } = useSelector((state) => state.authReducer);
  const card = watches.concat(straps).find((product) => product.id === id);
  const dispatch = useDispatch();

  if (!card) return <Page404/>;

  const useQuery = () => new URLSearchParams(useLocation().search);
  const productType = useQuery().get('productType');
  const index = parseInt(useQuery().get('index'));

  const {
    vendor,
    price,
    src,
    color,
    material,
    mechanism,
    addToCartFetching,
    addToFavoritesFetching,
    uniqueFavoritesId,
    inCart,
    inFavorites,
  } = card;

  const addProductToCart = () => {
    if (!isUserSignedIn) {
      toast.dark('Войдите, чтобы добавить товар в корзину');
      return;
    }

    dispatch(addProductToCartRequest({
      vendor, price, src, color, material, mechanism, id, inCart, inFavorites, index, productType, cartType: cartTypes.product,
    }));
  };

  const previewBlock = (
    <>
      <CardCarouselPreview src='/img/kulte-preview-1.png'/>
      <CardCarouselPreview src='/img/kulte-preview-2.png'/>
      <CardCarouselPreview src='/img/kulte-preview-3.png'/>
      <CardCarouselPreview src='/img/kulte-preview-4.png'/>
    </>
  );

  const fullImgBlock = (
    <>
      <CardCarouselPreview src='/img/watch-full-1.png'/>
      <CardCarouselPreview src='/img/watch-full-2.png'/>
      <CardCarouselPreview src='/img/watch-full-3.png'/>
      <CardCarouselPreview src='/img/watch-full-4.png'/>
    </>
  );

  const btn = (
    <button
      className='button'
      type='button'
      onClick={addProductToCart}
      disabled={addToCartFetching}
    >
      {addToCartFetching ? 'Загрузка' : 'В корзину'}
    </button>
  );

  return (
    <>
      <div className='container'>
        <div className='container__catalog'>
          <Header menuHidden/>
          <div className='breadcrumbs-wrapper'>
            <Breadcrumbs/>
          </div>
          <section className='card-block'>
            <div className='card-block__carousel'>
              <CardCarousel
                renderPreview={() => previewBlock}
                renderFullImg={() => fullImgBlock}
              >
              </CardCarousel>
            </div>

            <div className='card-block__info'>
              <div className='card-block__head'>
                <h3 className='card-block__vendor'>
                  {vendor}, 26mm
                </h3>
                <AddRemoveProductBtn
                  vendor={vendor}
                  price={price}
                  src={src}
                  color={color}
                  material={material}
                  mechanism={mechanism}
                  id={id}
                  index={index}
                  addToFavoritesFetching={addToFavoritesFetching}
                  inFavorites={inFavorites}
                  uniqueFavoritesId={uniqueFavoritesId}
                  productType={productType}
                  cartType={cartTypes.favorites}
                />
              </div>

              <p className='card-block__price'>
                {price} ₽
              </p>
              <h4 className='card-block__description'>
                Описание
              </h4>
              <p className='card-block__content'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A delectus distinctio maiores nesciunt nisi
                ratione suscipit unde vero voluptate? Debitis doloribus enim et laudantium molestiae mollitia
                necessitatibus quisquam reprehenderit voluptatum?
              </p>
              <p className='card-block__content'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A delectus distinctio maiores nesciunt nisi
                ratione suscipit unde vero voluptate? Debitis doloribus enim et laudantium molestiae mollitia
                necessitatibus quisquam reprehenderit voluptatum?
              </p>
              <p className='card-block__button'>
                {inCart ? <span className='card-block__in-cart'>В корзине</span> : btn}
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CardPage;
