import React from 'react';
import Header from '#comps/header';
import HeaderNav from '#comps/header-nav';
import Card from '#comps/card';

const CatalogPage = (props) => {

  return (
    <>
      <Header menuHidden/>
      <Card vendor='Techine' price='12 700' src='./img/watch_1.png'/>
    </>
  );
};

export default CatalogPage;
