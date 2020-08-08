import React from 'react';
import Header from '#comps/header';
import Cards from '../../blocks/cards';
import FilterForm from '../../blocks/filter-form';
import './catalog-page.scss';
import Subscribe from '#comps/subscribe';
import BandCard from '#comps/band-card';
import BandCarousel from '#comps/band-carousel';
import Heading from '#comps/heading';
import Breadcrumbs from '#comps/breadcrumbs';
import Sorting from '#comps/sorting';

const CatalogPage = (props) => {

  return (
    <>
      <div className='container'>
        <div className='container__catalog'>
          <Header menuHidden/>
          <div className='breadcrumbs-wrapper'>
            <Breadcrumbs/>
          </div>
          <div className='catalog-main__sorting'>
            <div className='catalog-main__heading'>
              <Heading level='h2'>
                Мужские часы
              </Heading>
            </div>
            <Sorting/>
          </div>
          <main className='catalog-main'>
            <FilterForm/>
            <Cards/>
          </main>
        </div>
      </div>
      <Subscribe/>
      <div className='container'>
        <div className='catalog-main__bands-heading'>
          <Heading level='h2'>
            Ремешки
          </Heading>
        </div>
      </div>
      <BandCarousel>
        <BandCard vendor='Georg Jensen' price='6 500 ₽' src='./img/band1.png'/>
        <BandCard vendor='Nato' price='3 200 ₽' src='./img/band2.png'/>
        <BandCard vendor='Spark' price='5 400 ₽' src='./img/band3.png'/>
        <BandCard vendor='Georg Jensen' price='6 500 ₽' src='./img/band1.png'/>
        <BandCard vendor='Nato' price='3 200 ₽' src='./img/band2.png'/>
        <BandCard vendor='Spark' price='5 400 ₽' src='./img/band3.png'/>
        <BandCard vendor='Georg Jensen' price='6 500 ₽' src='./img/band1.png'/>
        <BandCard vendor='Nato' price='3 200 ₽' src='./img/band2.png'/>
        <BandCard vendor='Spark' price='5 400 ₽' src='./img/band3.png'/>
        <BandCard vendor='Georg Jensen' price='6 500 ₽' src='./img/band1.png'/>
        <BandCard vendor='Nato' price='3 200 ₽' src='./img/band2.png'/>
        <BandCard vendor='Spark' price='5 400 ₽' src='./img/band3.png'/>
      </BandCarousel>
    </>
  );
};

export default CatalogPage;
