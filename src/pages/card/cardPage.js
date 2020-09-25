import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Page404 from '#pages/404';

import './card-page.scss';
import Header from '#comps/header';
import Breadcrumbs from '#comps/breadcrumbs';
import CardCarousel, { CardCarouselPreview } from '#comps/card-carousel';
import LikeButton from '#comps/like-button';

const CardPage = () => {
  const { id } = useParams();
  const watches = useSelector((state) => state.catalogCardsReducer.watchCards);
  const straps = useSelector((state) => state.catalogCardsReducer.strapCards);
  const card = watches.concat(straps).find((product) => product.id === id);

  if (!card) return <Page404/>;

  const { vendor, price } = card;

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
                <LikeButton/>
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
                <button className='button' type='button'>
                  В корзину
                </button>
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CardPage;
