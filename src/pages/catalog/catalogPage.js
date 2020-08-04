import React from 'react';
import Header from '#comps/header';
import Cards from '../../blocks/cards';
import Slider from '#comps/slider';

const CatalogPage = (props) => {

  return (
    <>
      <Header menuHidden/>
      <Slider/>
      <Cards/>
    </>
  );
};

export default CatalogPage;
