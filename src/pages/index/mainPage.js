import React from 'react';
import Hero from '#comps/hero';
import Heading from '#comps/heading';
import './main-page.scss';
import { Link } from 'react-router-dom';
import MediumPreviewCard from '#comps/preview-cards/medium-preview-card';
import LargePreviewCard from '#comps/preview-cards/large-preview-card';
import SmallPreviewCard from '#comps/preview-cards/small-preview-card';
import { smallCard, smallCard2 } from '#comps/preview-cards/small-preview-card/small-preview-card';
import Button from '#comps/button';
import SlickCarousel from '#comps/slick-carousel';
import banner from './img/photo_banner.jpg';

const MainPage = (props) => {

  return (
    <>
        <Hero/>

      <main className='main'>
          <section className='popular'>

            <Heading level='h2' centered>
              Популярные модели
            </Heading>

            <div className='popular__inner'>

              <div className='popular__link-wrapper'>
                <Link to='/catalog' className='popular__link-all'>
                  Смотреть все
                </Link>
              </div>

              <div className='popular__cards-preview'>
                <MediumPreviewCard/>
                <LargePreviewCard/>
                <SmallPreviewCard
                  title='Bvlgari'
                  price='81 700 ₽'
                  alt='Bvlgari'
                  src={smallCard}
                />
                <SmallPreviewCard
                  title='Bvlgari'
                  price='72 700 ₽'
                  alt='Bvlgari'
                  src={smallCard2}
                />
              </div>

            </div>

          </section>


          <section className='quality'>
            <div className='quality__bg-block'></div>

            <div className='quality__inner'>

              <div className='quality__slider'>
                <SlickCarousel>
                  <img src={banner} alt='banner'/>
                  <img src={banner} alt='banner'/>
                  <img src={banner} alt='banner'/>
                  <img src={banner} alt='banner'/>
                  <img src={banner} alt='banner'/>
                </SlickCarousel>
              </div>

              <div className='quality__info'>

                <Heading level='h2'>
                  Подлинное качество
                </Heading>

                <p className='quality__text'>
                  Все часы производятся в Швейцарии и имеют сертификаты качества. Настоящие швейцарские часы —
                  это предмет гордости и престижа.
                </p>

                <Button to='/catalog' brown>Смотреть каталог</Button>

              </div>

            </div>

          </section>

      </main>
    </>
  );
};

export default MainPage;
