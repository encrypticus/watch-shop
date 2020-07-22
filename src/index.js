import React from 'react';
import ReactDom from 'react-dom';
import './sass/common.scss';
import App from '#comps/app';

ReactDom.render(
  <App/>,
  document.querySelector('.root')
);
