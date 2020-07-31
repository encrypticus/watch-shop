import React from 'react';
import Hero from '#comps/hero';
import Heading from '#comps/heading';
import './main-page.scss';
import { Link } from 'react-router-dom';
import MediumPreviewCard from '#comps/preview-cards/medium-preview-card';

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
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainPage;
