import React from 'react';
import Header from '#comps/header';
import Breadcrumbs from '#comps/breadcrumbs';
import CardCarousel, { CardCarouselPreview } from '#comps/card-carousel';

const CardPage = (props) => {

  const previewBlock = (
    <>
      <CardCarouselPreview src='./img/kulte-preview-1.png'/>
      <CardCarouselPreview src='./img/kulte-preview-2.png'/>
      <CardCarouselPreview src='./img/kulte-preview-3.png'/>
      <CardCarouselPreview src='./img/kulte-preview-4.png'/>
    </>
  );

  const fullImgBlock = (
    <>
      <CardCarouselPreview src='./img/watch-full-1.png'/>
      <CardCarouselPreview src='./img/watch-full-2.png'/>
      <CardCarouselPreview src='./img/watch-full-3.png'/>
      <CardCarouselPreview src='./img/watch-full-4.png'/>
    </>
  )

  return (
    <>
      <div className='container'>
        <div className='container__catalog'>
          <Header menuHidden/>
          <div className='breadcrumbs-wrapper'>
            <Breadcrumbs/>
          </div>
        </div>
        <CardCarousel
          renderPreview={() => {
            return previewBlock;
          }}
          renderFullImg={() => {
            return fullImgBlock;
          }}
        >
        </CardCarousel>
      </div>
    </>
  );
};

export default CardPage;
