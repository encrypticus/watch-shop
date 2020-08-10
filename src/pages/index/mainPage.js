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
import photo1 from './img/photo_1.jpg';
import photo2 from './img/photo_2.jpg';
import photo3 from './img/photo_3.jpg';
import Socials from '#comps/socials';
import Header from '#comps/header';

const MainPage = (props) => {

  return (
    <>
      <div className='container'>
        <Header navHidden/>
        <Hero/>
      </div>

      <main className='main'>
        <div className='container'>
          <section className='popular'>

            <Heading level='h2' centered>
              Популярные модели
            </Heading>

            <div className='popular__inner'>

              <div className='popular__link-wrapper'>
                <Link to='/card' className='popular__link-all'>
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
        </div>

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

        <section className='news'>
          <div className='news__text'>
            <div className='news__title'>
              <Heading level='h2'>
                Следите за нашими новостями
              </Heading>
            </div>
            <p className='news__info'>
              Подписывайтесь на @conquest_watch в соцсетях и узнавайте о новинках и акциях первыми.
            </p>
            <Socials horizontal/>
          </div>
          <div className='news__images'>
            <img src={photo1} alt='photo 1'/>
            <img src={photo2} alt='photo 2'/>
            <img src={photo3} alt='photo 3'/>
          </div>
        </section>

      </main>
    </>
  );
};

export default MainPage;
