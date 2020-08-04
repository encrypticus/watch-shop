import React from 'react';
import Header from '#comps/header';
import Cards from '../../blocks/cards';
import Slider from '#comps/slider';
import Checkbox from '#comps/checkbox';
import Filter from '#comps/filter';
import { FilterItem } from '#comps/filter/filter';
import FilterForm from '../../blocks/filter-form';

const CatalogPage = (props) => {

  return (
    <>
      <Header menuHidden/>

      <Cards/>

      <FilterForm/>

    </>
  );
};

export default CatalogPage;
