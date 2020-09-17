import React from 'react';
import { useSelector } from 'react-redux';
import Header from '#comps/header';
import Cards from '../../blocks/cards';
import StrapCards from '../../blocks/strap-cards';
import FilterForm from '../../blocks/filter-form';
import './catalog-page.scss';
import Subscribe from '#comps/subscribe';
import BandCarousel from '#comps/band-carousel';
import Heading from '#comps/heading';
import Breadcrumbs from '#comps/breadcrumbs';
import Sorting from '#comps/sorting';
import Spinner from '#comps/spinner';

const CatalogPage = () => {
  const { isUserSignedIn } = useSelector((state) => state.authReducer);
  const {
    getProductCatalogIsFetching,
    error: { status: hasError },
  } = useSelector((state) => state.catalogCardsReducer);

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
      {
        getProductCatalogIsFetching && !hasError && isUserSignedIn
          ? <Spinner/>
          : <BandCarousel>
            <StrapCards/>
          </BandCarousel>
      }
    </>
  );
};

export default CatalogPage;
