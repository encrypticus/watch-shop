import React from 'react';
import ReactDom from 'react-dom';
import App from '#comps/app';

ReactDom.render(
  <App text='hello, I am the App'/>,
  document.querySelector('.root')
);
