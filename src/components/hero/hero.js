import React from 'react';
import './hero.scss';
import Socials from '#comps/socials';
import Heading from '#comps/heading';
import Button from '#comps/button';
import Banner from '#comps/banner';
import DecorLine from '#comps/decor-line';

const Hero = () => (
    <section className='hero'>
      <Socials vertical/>

      <div className='hero__advert'>
        <div className='hero__heading-h1'>
          <div className='hero__decor-line-wrapper'>
            <DecorLine/>
          </div>

          <Heading h1>
            Весна/Лето 2019
          </Heading>
        </div>

        <div className='hero__heading-h2'>
          <Heading level='h3'>
            Коллекция
          </Heading>
        </div>

        <p className='hero__text'>
          Швейцарские часы в наличии в Москве
          и с доставкой по всему миру
        </p>

        <Button to='/catalog'>
          Смотреть каталог
        </Button>
      </div>

      <Banner/>

    </section>
);

export default Hero;
