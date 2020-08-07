import React from 'react';
import Header from '#comps/header';
import Cards from '../../blocks/cards';
import FilterForm from '../../blocks/filter-form';
import './catalog-page.scss';

const CatalogPage = (props) => {

  return (
    <div className='container'>

      <div className='container__catalog'>
        <Header menuHidden/>

        <Cards/>

        <FilterForm/>
      </div>

    </div>
  );
};

export default CatalogPage;
